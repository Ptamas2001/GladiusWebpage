import React, {  useRef } from "react";
import { Text } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Plane } from "@react-three/drei";

export function ThreeDText()

 {
    const planeRef = useRef();
    const texture = useLoader(TextureLoader, "https://i.shgcdn.com/684bfc4f-333f-4a1a-9f44-690617508c17/-/format/auto/-/preview/3000x3000/-/quality/lighter/");
    const texture2 = useLoader(TextureLoader, "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2023-10/231031-First-Due-Firearms-maine-ew-1209p-9f8f92.jpg");

    return (
      
       <>
         <Text
          rotation-y={-Math.PI * 1  } 
          position={[0, 2,60]} // Szöveg pozíciója a 3D térben
          fontSize={1} // Betűméret
          color="white" // Szöveg színe
          maxWidth={200} // Maximális szélesség (opcionális)
          lineHeight={1} // Sor magassága (opcionális)
          letterSpacing={0.02} // Betűköz (opcionális)
          textAlign="center" // Szöveg igazítása (opcionális)
          font="/path/to/your/font" // Betűtípus elérési útvonala (opcionális)
        >
        More than 500+ owners
        </Text>

<Text
rotation-y={-Math.PI * 1  } 
position={[0, 2,40]} // Szöveg pozíciója a 3D térben
fontSize={1} // Betűméret
color="white" // Szöveg színe
maxWidth={200} // Maximális szélesség (opcionális)
lineHeight={1} // Sor magassága (opcionális)
letterSpacing={0.02} // Betűköz (opcionális)
textAlign="center" // Szöveg igazítása (opcionális)
font="/path/to/your/font" // Betűtípus elérési útvonala (opcionális)
>
Over 100 years
</Text>

<Text
rotation-y={-Math.PI * 1  } 
position={[0, 2,80]} // Szöveg pozíciója a 3D térben
fontSize={1} // Betűméret
color="white" // Szöveg színe
maxWidth={200} // Maximális szélesség (opcionális)
lineHeight={1} // Sor magassága (opcionális)
letterSpacing={0.02} // Betűköz (opcionális)
textAlign="center" // Szöveg igazítása (opcionális)
font="/path/to/your/font" // Betűtípus elérési útvonala (opcionális)
>
For all terrain
</Text>

<Text
rotation-y={-Math.PI * 1  } 
position={[3, 2,100]} // Szöveg pozíciója a 3D térben
fontSize={0.5} // Betűméret
color="white" // Szöveg színe
maxWidth={5} // Maximális szélesség (opcionális)
lineHeight={1} // Sor magassága (opcionális)
letterSpacing={0.02} // Betűköz (opcionális)
textAlign="left" // Szöveg igazítása (opcionális)
font="/path/to/your/font" // Betűtípus elérési útvonala (opcionális)
strokeColor={"red"}
>
The best ammo's and rifles for Sport Shoting, or army, and for Hunting
Find your best
</Text>

<Text
rotation-y={-Math.PI * 1  } 
position={[-3, 2.8,100]} // Szöveg pozíciója a 3D térben
fontSize={0.5} // Betűméret
color="white" // Szöveg színe
maxWidth={5} // Maximális szélesség (opcionális)
lineHeight={1} // Sor magassága (opcionális)
letterSpacing={0.02} // Betűköz (opcionális)
textAlign="left" // Szöveg igazítása (opcionális)
font="/path/to/your/font" // Betűtípus elérési útvonala (opcionális)
strokeColor={"red"}
>
You can choose from 700+ products
</Text>

<Text
rotation-y={-Math.PI * 1  } 
position={[6, 9.5,130]} // Szöveg pozíciója a 3D térben
fontSize={1} // Betűméret
color="white" // Szöveg színe
maxWidth={20} // Maximális szélesség (opcionális)
lineHeight={1} // Sor magassága (opcionális)
letterSpacing={0.02} // Betűköz (opcionális)
textAlign="left" // Szöveg igazítása (opcionális)
font="/path/to/your/font" // Betűtípus elérési útvonala (opcionális)
strokeColor={"red"}
>
Helpful customer service
</Text>



<Text
rotation-y={-Math.PI * 1  } 
position={[6.7, 2,130]} // Szöveg pozíciója a 3D térben
fontSize={0.5} // Betűméret
color="white" // Szöveg színe
maxWidth={10} // Maximális szélesség (opcionális)
lineHeight={1} // Sor magassága (opcionális)
letterSpacing={0.02} // Betűköz (opcionális)
textAlign="left" // Szöveg igazítása (opcionális)
font="/path/to/your/font" // Betűtípus elérési útvonala (opcionális)
strokeColor={"red"}
>
From the beginning, our passion for bowhunting & innovation has fueled us in looking to the future, always asking “what-if” & searching for ways to help our customers be more successful in the field.

Even now, having shipped over 1 million rifle since 1994, the same guiding principles that drove our company then, continue to drive us today – Family Owned & Built in America.
</Text>



<Plane
position={[-8, 6,130]} // Szöveg pozíciója a 3D térben
ref={planeRef}
args={[12, 8]}
rotation-y={-Math.PI * 1  } >
<meshBasicMaterial attach="material" map={texture} />
</Plane>

<Plane
position={[-8, -2,130]} // Szöveg pozíciója a 3D térben
ref={planeRef}
args={[12, 8]}
rotation-y={-Math.PI * 1  } >
<meshBasicMaterial attach="material" map={texture2} />
</Plane>


</>




     
    );
  }

export default ThreeDText
