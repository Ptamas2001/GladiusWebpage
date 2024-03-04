


import React, { useEffect, useRef } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { sRGBEncoding, RepeatWrapping, TextureLoader } from "three";
import { Mesh } from "three";

//3d modell
export function Forest() {

  const [roughnes, normal] = useLoader(TextureLoader, [
    ])


  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "models/lolap2.glb"
  );
  const rifleRef = useRef();
  const rifleMixer = useRef();

 useEffect(() => {
  if (rifleRef.current) {
    
    rifleRef.current.scale.set(3, 3,3  );
    rifleRef.current.position.set(-0.05,-5.75 , 160);
    rifleRef.current.rotateY(6.3)
    rifleRef.current.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
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
        intensity={10000}
        angle={Math.PI }
        penumbra={0.5}
        position={[10, 20, 180]}
        castShadow
        shadow-bias={-0.0001}
      />
  <spotLight
        color={[1,1,1]}
        intensity={1000}
        angle={Math.PI }
        penumbra={0.5}
        position={[10, 20, 180]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[1, 1, 1]}
        intensity={1000}
        angle={Math.PI/1 }
        penumbra={0.5}
        position={[-5, 20, 140]}
        castShadow
        shadow-bias={-0.0001}
      />
           <spotLight
        color={[1, 1, 1]}
        intensity={1000}
        angle={Math.PI/1 }
        penumbra={0.5}
        position={[0, 10, 200]}
        castShadow
        shadow-bias={-0.0001}
      />
          <spotLight
        color={[1, 1, 1]}
        intensity={1000}
        angle={Math.PI/1 }
        penumbra={0.5}
        position={[0, 10, 220]}
        castShadow
        shadow-bias={-0.0001}
      />
       <pointLight
         position={[0, 20, 180]}
         intensity={1000}/>
          
    
    
  </>
  )
 
}