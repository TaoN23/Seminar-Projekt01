function Border() {
  return (
    <>
      <group>
        <mesh receiveShadow castShadow>
          <boxGeometry args={[20, 0.2, 20, 4, 4, 4]} />
          <meshPhongMaterial color={"green"} />
        </mesh>

        <group>
          <mesh position={[10, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
            <boxGeometry args={[20, 4, 0.2, 4, 4, 4]} />
            <meshPhongMaterial color={"grey"} />
          </mesh>
          <mesh position={[-10, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
            <boxGeometry args={[20, 2, 0.2, 4, 4, 4]} />
            <meshPhongMaterial color={"grey"} />
          </mesh>
          <mesh position={[0, 0, 10]}>
            <boxGeometry args={[20, 4, 0.2, 4, 4, 4]} />
            <meshPhongMaterial color={"grey"} />
          </mesh>
          <mesh position={[0, 0, -10]}>
            <boxGeometry args={[20, 2, 0.2, 4, 4, 4]} />
            <meshPhongMaterial color={"grey"} />
          </mesh>
        </group>
      </group>
    </>
  );
}

export default Border;
