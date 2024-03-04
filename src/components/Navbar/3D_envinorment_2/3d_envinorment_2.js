import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Html } from '@react-three/drei';
import "./3D_envinorment_2.css"
import { SMGrifle } from '../../../3D-parts/SMGrifle';
import { FirstDescAboutSmg } from '../../../3D-parts/FirstDescPlaneAboutSmg';
import { Text } from "@react-three/drei";

function SMGshow() {
  const [isPlaying, setIsPlaying] = useState(true);
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45}
      
      minDistance={2}  // Minimális távolság a kamera célpontjától
      maxDistance={8} // Maximális távolság a kamera célpontjától 
      enablePan={false}
       />
      <PerspectiveCamera 
       makeDefault fov={50} 
       position={[-8,2.2, -0.3]}
       />
      <color args={[0, 0, 0]} attach="background" />
    
    <SMGrifle></SMGrifle>
      <spotLight
        color={[206, 201, 199 ]}
        intensity={7}
        angle={Math.PI / 1}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[206, 201, 199 ]}
        intensity={40}
        angle={Math.PI / 1}
        penumbra={0.5}
        position={[-2 , 10, 3]}
        castShadow
        shadow-bias={-0.0001}
      />
     <FirstDescAboutSmg></FirstDescAboutSmg>
     <ambientLight />
      
    </>
  );
}

function Rifleapp2() {
  return (
    <div className="home_rifle_shot_show_2">
      <Suspense fallback={null}>
        <Canvas shadows>
        
          <SMGshow></SMGshow>
          <Text
            
        rotation-y={-Math.PI * -1.5} 
        position={[0, 2,0]} // Szöveg pozíciója a 3D térben
        fontSize={1} // Betűméret
        color="white" // Szöveg színe
        maxWidth={200} // Maximális szélesség (opcionális)
        lineHeight={1} // Sor magassága (opcionális)
        letterSpacing={0.02} // Betűköz (opcionális)
        textAlign="center" // Szöveg igazítása (opcionális)
        font="/path/to/your/font" // Betűtípus elérési útvonala (opcionális)
      >
        SMG r-8
      </Text>
      <Text
            rotation-y={-Math.PI * -1.5} 
            position={[0, -1.5,5]} // Szöveg pozíciója a 3D térben
            fontSize={0.2} // Betűméret
            color="white" // Szöveg színe
            maxWidth={3} // Maximális szélesség (opcionális)
            lineHeight={1} // Sor magassága (opcionális)
            letterSpacing={0.02} // Betűköz (opcionális)
            textAlign="left" // Szöveg igazítása (opcionális)
            font="/path/to/your/font" // Betűtípus elérési útvonala (opcionális)
          >
           THE MOST TECHNOLOGICALLY ADVANCED COMPACT SMG AUTOMATIC RIFLE THE WORLD HAS EVER SEEN.
          </Text>
          <Text
            rotation-y={-Math.PI * -1.5} 
            position={[0, 1.5,4
            ]} // Szöveg pozíciója a 3D térben
            fontSize={0.2} // Betűméret
            color="white" // Szöveg színe
            maxWidth={3} // Maximális szélesség (opcionális)
            lineHeight={1} // Sor magassága (opcionális)
            letterSpacing={0.02} // Betűköz (opcionális)
            textAlign="left" // Szöveg igazítása (opcionális)
            font="/path/to/your/font" // Betűtípus elérési útvonala (opcionális)
          >
           Gen 3 sillencer tehnology.
          </Text>
          <Text
            rotation-y={-Math.PI * -1.5} 
            position={[0, -1,0.5
            ]} // Szöveg pozíciója a 3D térben
            fontSize={0.2} // Betűméret
            color="white" // Szöveg színe
            maxWidth={3} // Maximális szélesség (opcionális)
            lineHeight={1} // Sor magassága (opcionális)
            letterSpacing={0.02} // Betűköz (opcionális)
            textAlign="left" // Szöveg igazítása (opcionális)
            font="/path/to/your/font" // Betűtípus elérési útvonala (opcionális)
          >
           50 db capacity mag.
          </Text>
          <Text
            rotation-y={-Math.PI * -1.5} 
            position={[0,1,-4
            ]} // Szöveg pozíciója a 3D térben
            fontSize={0.2} // Betűméret
            color="white" // Szöveg színe
            maxWidth={3} // Maximális szélesség (opcionális)
            lineHeight={1} // Sor magassága (opcionális)
            letterSpacing={0.02} // Betűköz (opcionális)
            textAlign="left" // Szöveg igazítása (opcionális)
            font="/path/to/your/font" // Betűtípus elérési útvonala (opcionális)
          >
           Adjustable stock.
          </Text>
        </Canvas>
      </Suspense>
    </div>
  );
}

export default Rifleapp2;
