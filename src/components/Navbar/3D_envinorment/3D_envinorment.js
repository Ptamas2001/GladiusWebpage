import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Html } from '@react-three/drei';
import { Ground } from '../../../3D-parts/Ground';
import { Rifle } from '../../../3D-parts/Rifle';
import './3D_envinorment.css';
import { Text } from '@react-three/drei';
import ThreeDText from '../../../3D-parts/3D-_text_of_mainShow';
import { Forest } from '../../../3D-parts/Forest';

function RifleShow() {
  const [isPlaying, setIsPlaying] = useState(true);
  let x = -9;
  let y = 4;
  let z = -8;

  return (
    <>
    <directionalLight
    position={[3.3, 10, 100]}
    castShadow
    intensity={3}
  />
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} enablePan={false} enableZoom={false} />
     
      <color args={[0.01, 0.01, 0.01]} attach="background" />
      <Rifle />
      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={1000}
        angle={Math.PI / 1}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={1000}
        angle={Math.PI / 1}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <Ground />
      
    </>
  );
}function RifleApp() {
  

  

  return (
    <div className="home_rifle_shot_show">
      <Suspense fallback={null}>
        <Canvas shadows>
        <Forest/>
          <RifleShow />
         
          <Text>
            <ThreeDText></ThreeDText>
          </Text>
        
        
         
        </Canvas>
      </Suspense>
    </div>
  );
}


export default RifleApp;
