import { Box, OrbitControls, Sky } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Playground from "./Playground/Playground"


function App() {

  return (
    <Canvas>
      <Playground/>
      <Sky/>
      <ambientLight/>
      
      <OrbitControls/>
    </Canvas>
  )
}

export default App
