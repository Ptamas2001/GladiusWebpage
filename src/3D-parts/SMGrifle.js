


import React, { useEffect, useRef } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { sRGBEncoding, RepeatWrapping, TextureLoader } from "three";
import { Mesh } from "three";
import * as THREE from "three";
//3d modell
export function SMGrifle() {

  const [roughnes, normal] = useLoader(TextureLoader, [
    ])


  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "models/smg rifle/scene.gltf"
  );
  const rifleRef = useRef();
  const rifleMixer = useRef();

 useEffect(() => {
  if (rifleRef.current) {
    rifleRef.current.scale.set(12, 12,12);
    rifleRef.current.position.set(0, 0, -0.3);
    rifleRef.current.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });

    rifleMixer.current = new THREE.AnimationMixer(rifleRef.current);
    console.log(gltf.animations)
    gltf.animations.forEach((animation) => {
      const action = rifleMixer.current.clipAction(animation, rifleRef.current);
      //action.loop = THREE.LoopOnce; // Állítsd be a loop opciót LoopOnce-ra
      action.clampWhenFinished = true; // Függetlenítsük a tartományt a kliptől
      action.play();
    });

  

  }
}, [rifleRef, gltf.animations]);

  const { clock } = useThree();
  const time = 0
  useFrame((state, delta) => {
    if (rifleMixer.current) {
      rifleMixer.current.update(delta);
    }
  });

  //first description box





  return <primitive object={gltf.scene} ref={rifleRef} />;
}
