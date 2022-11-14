import { Box, OrbitControls, Sky } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Playground from "./Playground/Playground"


function App() {

  return (
    <Canvas>
      <Playground/>
      <Sky/>
      <ambientLight/>
      <pointLight position={[5,5,5]} intensity={20}/>
      {
      //position: damit die helper über dem Boden sind und sich nicht überschneiden
      }
      <axesHelper args={[30]} position={[0,0.12,0]}/>
      <gridHelper args={[40,40,40]} position={[0,0.11,0]}/>
      <OrbitControls/>
    </Canvas>
  )
}

export default App
