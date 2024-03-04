
import { Text } from "@react-three/drei";

export function FirstDescAboutSmg() {

    <Text
        position={[0, 2,-5]} // Szöveg pozíciója a 3D térben
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
}
