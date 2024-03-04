import React, { useEffect, useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import TWEEN from "tween.js";

export function Ammo({ camera, animationEnded, resetCamera, controls }) {
  const scrollVariable = useRef(0);
  const rifleRef = useRef();
  const hasResetCameraRun = useRef(false); // Ref az állapot nyomon követésére
  camera.far = 30;
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "models/rifle/bullet.glb"
  );

  const initialPosition = { x: 1.8, y: 2, z: 6 };

  const handleScroll = (event) => {
    if (animationEnded === true) {
      if (event.deltaY > 0) {
        scrollVariable.current += 1;
        animatePosition(scrollVariable.current);
      } else if (event.deltaY < 0 && scrollVariable.current > 0) {
        scrollVariable.current -= 1;
        animatePosition(scrollVariable.current);
      }
    }
  };
  
  const animatePosition = (targetPosition) => {
    const newPositionZ = Math.max(targetPosition, 0);
  
    new TWEEN.Tween(rifleRef.current.position)
      .to({ x: 1.8, y: 2, z: newPositionZ }, 500)
      .easing(TWEEN.Easing.Quadratic.Out)
      .start();
  };
  
const animateCameraPosition = (targetPosition) => {
  // Hajtsd végre a hátrábbmozgatást csak, ha a scrollVariable értéke eléri a 100-at
  const newCameraPositionZ = scrollVariable.current >= 135 ? Math.max(targetPosition - 7, 0) : targetPosition;
  
  // Ha a scrollVariable értéke 140, akkor az y legyen 1, egyébként 2
  const newCameraPositionY = scrollVariable.current >= 135 ? 1 : 2;

  new TWEEN.Tween(camera.position)
    .to({ x: 0, y: newCameraPositionY, z: newCameraPositionZ }, 500)
    .easing(TWEEN.Easing.Quadratic.Out)
    .start();
};


  useEffect(() => {
    // Kezdeti pozíció beállítása
    rifleRef.current.position.set(initialPosition.x, initialPosition.y, initialPosition.z);

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [animationEnded]);

  useFrame(() => {

    if (scrollVariable.current==180) {
      document.body.style.overflow = "visible";
      resetCamera();
      controls.current.unlock();
      // Megállítjuk az animációt
    }

    TWEEN.update();
  
    if (rifleRef.current) {
      rifleRef.current.scale.set(0.08, 0.08, 0.08);
      if (animationEnded === true) {
        camera.lookAt(0, 2, 1000);
        animateCameraPosition(scrollVariable.current - 4);
      }
      rifleRef.current.traverse((object) => {
        if (object instanceof Mesh) {
          object.castShadow = true;
          object.receiveShadow = true;
          object.material.envMapIntensity = 20;
        }
      });
  
      
    }
   
  });
  
   

  return <primitive object={gltf.scene} ref={rifleRef} />;
}
