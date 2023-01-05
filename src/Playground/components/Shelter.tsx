import { useBox } from '@react-three/cannon';
import { Box } from '@react-three/drei';
import React from 'react';
import { BufferGeometry, Mesh } from 'three';

function Shelter(): JSX.Element {
    const [shelter1Ref] = useBox<Mesh<BufferGeometry>>(() => ({
        type: 'Static',
        args: [5, 4, 0.2],
        position: [7.5, 0, 5],
    }));

    return (
        <group>
            <mesh ref={shelter1Ref} castShadow receiveShadow>
                <boxGeometry args={[5, 4, 0.2]} attach="geometry" />
                <meshPhongMaterial color="lightgrey" attach="material" />
            </mesh>
            <Box
                castShadow
                receiveShadow
                args={[5, 0.2, 5, 4, 2, 4]}
                position={[7.5, 2, 7.5]}
            >
                <meshPhongMaterial color="lightgrey" />
            </Box>
        </group>
    );
}

export default React.memo(Shelter);
