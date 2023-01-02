import { Box } from '@react-three/drei';

function Border(): JSX.Element {
    return (
        <group>
            <mesh receiveShadow castShadow>
                <boxGeometry args={[20, 0.2, 20, 4, 4, 4]} />
                <meshPhongMaterial color="green" />
            </mesh>
            <group>
                <Box
                    args={[20, 4, 0.2, 4, 4, 4]}
                    position={[10, 0, 0]}
                    rotation={[0, Math.PI / 2, 0]}
                >
                    <meshPhongMaterial color="grey" />
                </Box>
                <Box
                    args={[20, 4, 0.2, 4, 4, 4]}
                    position={[-10, 0, 0]}
                    rotation={[0, Math.PI / 2, 0]}
                >
                    <meshPhongMaterial color="grey" />
                </Box>
                <Box args={[20, 4, 0.2, 4, 4, 4]} position={[0, 0, 10]}>
                    <meshPhongMaterial color="grey" />
                </Box>
                <Box args={[20, 4, 0.2, 4, 4, 4]} position={[0, 0, -10]}>
                    <meshPhongMaterial color="grey" />
                </Box>
            </group>
        </group>
    );
}

export default Border;
