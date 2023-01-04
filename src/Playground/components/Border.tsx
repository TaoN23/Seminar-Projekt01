import { Box } from '@react-three/drei';
import { usePlane } from '@react-three/cannon';
import React from 'react';
import { Mesh } from 'three';

function Border(): JSX.Element {
    const [groundRef] = usePlane<Mesh>(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        type: 'Static',
    }));
    return (
        <group>
            <mesh ref={groundRef} receiveShadow castShadow>
                <planeGeometry args={[20, 20, 4, 4]} />
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

export default React.memo(Border);
