import React, { useRef } from 'react';
import { Html } from "@react-three/drei";
import  {  useState } from 'react'
import "./3D_html.css"

function Title(props) {

        <Html>
            <h1>asad</h1>
        </Html>
    const meshRef = useRef()
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    return (
        <mesh
        {...props}
        ref={meshRef}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
        position={[-0, 1,100]} // Módosított pozíció
      >
        <boxGeometry args={[10, 10, 0.5]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
      
    )
  }




export default Title;
