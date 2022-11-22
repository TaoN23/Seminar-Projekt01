function Shelter() {
  return (
    <>
      <group>
        <mesh castShadow receiveShadow position={[7.5, 0, 5]}>
          <boxGeometry args={[5, 4, 0.2, 4, 4, 2]} />
          <meshPhongMaterial color={"lightgrey"} />
        </mesh>
        <mesh castShadow receiveShadow position={[7.5, 2, 7.5]}>
          <boxGeometry args={[5, 0.2, 5, 4, 2, 4]} />
          <meshPhongMaterial color={"lightgrey"} />
        </mesh>
      </group>
    </>
  );
}

export default Shelter;
