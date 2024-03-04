import React, { useEffect, useRef, useState } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import * as THREE from "three";
import { Html } from "@react-three/drei";
import CameraComponent from "./Camera";
import './3D-parts.css';

export function Rifle() {
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "models/rifle/KÉSZFEGYVER2.glb"
  );
  const rifleRef = useRef();
  const rifleMixer = useRef();
  const { camera, gl } = useThree();
  const [animationStarted, setAnimationStarted] = useState(false);
  const [animationStratable, setAnimationStartable] = useState(false);
  const [showtext, setShowtext] = useState(true)

  useEffect(() => {
    if (rifleRef.current) {
      rifleRef.current.scale.set(0.08, 0.08, 0.08);
      rifleRef.current.position.set(0, -0.1, -3);
      rifleRef.current.traverse((object) => {
        if (object instanceof Mesh) {
          object.castShadow = true;
          object.receiveShadow = true;
          object.material.envMapIntensity = 20;
        }
      });

      rifleMixer.current = new THREE.AnimationMixer(rifleRef.current);

      gltf.animations.forEach((animation) => {
        const action = rifleMixer.current.clipAction(
          animation,
          rifleRef.current
        );
        action.loop = THREE.LoopOnce;
        action.clampWhenFinished = true;

        // Ne játszd le az animációt az inicializációkor, csak ha a kattintás már megtörtént
        if (animationStarted) {
          action.play();
        }
      });
    }
  }, [rifleRef, gltf.animations, animationStarted]);

  const { clock } = useThree();
  useFrame((state, delta) => {
    if (rifleMixer.current) {
      rifleMixer.current.update(delta);
    }
  });

  const handleButtonClick = () => {
    setShowtext(false)
    if (!animationStarted) {
      gltf.animations.forEach((animation) => {
        rifleMixer.current.clipAction(animation, rifleRef.current).play();
      });
      setAnimationStarted(true);
      setAnimationStartable(true);
      console.log(animationStarted);
      console.log(animationStratable);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Escape") {
      setShowtext(true);
      document.body.style.overflow = "visible";
  
      // Megállítjuk az animációt
      
    }
  };
  

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []); 

  return (
    <>
      <CameraComponent
        animationStarted={animationStarted}
        animationStartable={animationStratable} // Javítás: itt helyes nevet használunk
      />
      <primitive object={gltf.scene} ref={rifleRef} />
      {showtext && 
      <Html>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <button onClick={handleButtonClick} className="animation-startButton">Click here to start</button>
        </div>
      </Html>
}
    </>
  );
}
