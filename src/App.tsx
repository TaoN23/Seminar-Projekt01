import { Box, Sky } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

function App() {

  return (
    <Canvas>
      <mesh>
        <Box>
          <meshStandardMaterial color={"royalblue"}/>
        </Box>
      </mesh>
      <Sky/>
      <ambientLight/>
    </Canvas>
  )
}

export default App
