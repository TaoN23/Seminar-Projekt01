import { Box, OrbitControls, PerspectiveCamera, Sky, Stats } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Camera from "./Camera/Camera"
import Playground from "./Playground/Playground"


function App() {

  return (
    <Canvas shadows>
      <Playground/>
      <Sky/>
      <ambientLight/>
      <pointLight castShadow position={[5,5,5]} intensity={20}/>
      {
        // Helper und Licht muss noch in ein eigenes component
        //position: damit die helper über dem Boden sind und sich nicht überschneiden
      }
      <axesHelper args={[30]} position={[0,0.12,0]}/>
      <gridHelper args={[40,40,40]} position={[0,0.11,0]}/>
      <Camera/>
    </Canvas>
  )
}

export default App
