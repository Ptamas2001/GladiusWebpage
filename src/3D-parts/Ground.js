import { MeshReflectorMaterial } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { sRGBEncoding, RepeatWrapping, TextureLoader } from "three";

export function Ground() {
    const [roughness, normal] = useLoader(TextureLoader, [
        process.env.PUBLIC_URL + "textures/terrain-roughness.jpg",
        process.env.PUBLIC_URL + "textures/terrain-normal.jpg",
    ]);

    useEffect(() => {
        [normal, roughness].forEach((t) => {
            t.wrapS = RepeatWrapping;
            t.wrapT = RepeatWrapping;
            t.repeat.set(5, 5);
        });

        normal.encoding = sRGBEncoding;

        // Új tulajdonság a Three.js új verziójában
        if (normal.image) {
            normal.image.colorSpace = sRGBEncoding;
        }

        normal.anisotropy = 16;
    }, [normal, roughness]);

    return (
        <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow
            position={[0,-1.2,0]}
            >
            <planeGeometry args={[30, 30]} />
            <MeshReflectorMaterial
                envMapIntensity={0}
                normalMap={normal}
                normalScale={[0.15, 0.15]}
                roughnessMap={roughness}
                dithering={true}
                color={[0.015, 0.015, 0.015]}
                roughness={0.6}
                blur={[1000, 400]}
                mixBlur={30}
                mixStrength={80}
                mixContrast={1}
                resolution={1024}
                mirror={0}
                depthScale={0.01}
                minDepthThreshold={0.9}
                maxDepthThreshold={1}
                depthToBlurRatioBias={0.25}
                debug={0}
                reflectorOffset={0.2}
            />
        </mesh>
    );
}
