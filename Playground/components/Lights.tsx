import { Sky } from "@react-three/drei";

function Lights() {
  return (
    <>
      <Sky />
      <ambientLight />
      <pointLight castShadow position={[5, 5, 5]} intensity={10} />
    </>
  );
}

export default Lights;
