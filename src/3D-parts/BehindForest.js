


import React, { useEffect, useRef } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { sRGBEncoding, RepeatWrapping, TextureLoader } from "three";
import { Mesh } from "three";
import { THREE } from "three.js";

//3d modell
export function BehindForest() {

  const [roughnes, normal] = useLoader(TextureLoader, [
    ])


  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "models/behindForest.glb"
  );
  const rifleRef = useRef();
  const rifleMixer = useRef();

 useEffect(() => {
  if (rifleRef.current) {
    
    rifleRef.current.scale.set(0.1, 0.1,0.1);
    rifleRef.current.position.set(0.,1.8 , 2);
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

  




  return (
  <>
   <primitive object={gltf.scene} ref={rifleRef} />;

   <spotLight
        color={[1,1,1]}
        intensity={1000}
        angle={Math.PI }
        penumbra={0.5}
        position={[10, 100, 160]}
        castShadow
        shadow-bias={-0.0001}
      />
  <spotLight
        color={[1,1,1]}
        intensity={10000}
        angle={Math.PI }
        penumbra={0.5}
        position={[10,100, 180]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[1, 1, 1]}
        intensity={1000}
        angle={Math.PI/1 }
        penumbra={0.5}
        position={[-5, 100, 225]}
        castShadow
        shadow-bias={-0.0001}
      />
           <spotLight
        color={[1, 1, 1]}
        intensity={1000}
        angle={Math.PI/1 }
        penumbra={0.5}
        position={[0, 100, 200]}
        castShadow
        shadow-bias={-0.0001}
      />
          <spotLight
        color={[1, 1, 1]}
        intensity={1000}
        angle={Math.PI/1 }
        penumbra={0.5}
        position={[0, 100, 220]}
        castShadow
        shadow-bias={-0.0001}
      />
    
    
  </>
  )
 
}