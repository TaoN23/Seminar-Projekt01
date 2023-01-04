import { useBox, usePlane } from '@react-three/cannon';
import React from 'react';
import { BufferGeometry, Mesh } from 'three';

function Border(): JSX.Element {
    const [groundRef] = usePlane<Mesh<BufferGeometry>>(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        type: 'Static',
    }));

    const [border1Ref] = useBox<Mesh<BufferGeometry>>(() => ({
        type: 'Static',
        args: [20, 20, 0.2],
        position: [10, 0, 0],
        rotation: [0, Math.PI / 2, 0],
    }));

    const [border2Ref] = useBox<Mesh<BufferGeometry>>(() => ({
        type: 'Static',
        args: [20, 20, 0.2],
        position: [-10, 0, 0],
        rotation: [0, Math.PI / 2, 0],
    }));

    const [border3Ref] = useBox<Mesh<BufferGeometry>>(() => ({
        type: 'Static',
        args: [20, 20, 0.2],
        position: [0, 0, 10],
    }));

    const [border4Ref] = useBox<Mesh<BufferGeometry>>(() => ({
        type: 'Static',
        args: [20, 20, 0.2],
        position: [0, 0, -10],
    }));
    return (
        <group>
            <mesh ref={groundRef} receiveShadow>
                <planeGeometry args={[20, 20, 10, 10]} attach="geometry" />
                <meshPhongMaterial color="green" attach="material" />
            </mesh>

            <group>
                <mesh ref={border1Ref}>
                    <boxGeometry
                        args={[20, 4, 0.2, 4, 4, 4]}
                        attach="geometry"
                    />
                    <meshPhongMaterial color="grey" attach="material" />
                </mesh>
                <mesh ref={border2Ref}>
                    <boxGeometry
                        args={[20, 4, 0.2, 4, 4, 4]}
                        attach="geometry"
                    />
                    <meshPhongMaterial color="grey" attach="material" />
                </mesh>
                <mesh ref={border3Ref}>
                    <boxGeometry
                        args={[20, 4, 0.2, 4, 4, 4]}
                        attach="geometry"
                    />
                    <meshPhongMaterial color="grey" attach="material" />
                </mesh>
                <mesh ref={border4Ref}>
                    <boxGeometry
                        args={[20, 4, 0.2, 4, 4, 4]}
                        attach="geometry"
                    />
                    <meshPhongMaterial color="grey" attach="material" />
                </mesh>
            </group>
        </group>
    );
}

export default React.memo(Border);
