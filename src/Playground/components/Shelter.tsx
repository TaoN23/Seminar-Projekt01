import { Box } from '@react-three/drei';

function Shelter(): JSX.Element {
    return (
        <>
            <group>
                <Box
                    castShadow
                    receiveShadow
                    args={[5, 4, 0.2, 4, 4, 2]}
                    position={[7.5, 0, 5]}
                >
                    <meshPhongMaterial color="lightgrey" />
                </Box>
                <Box
                    castShadow
                    receiveShadow
                    args={[5, 0.2, 5, 4, 2, 4]}
                    position={[7.5, 2, 7.5]}
                >
                    <meshPhongMaterial color="lightgrey" />
                </Box>
            </group>
        </>
    );
}

export default Shelter;
