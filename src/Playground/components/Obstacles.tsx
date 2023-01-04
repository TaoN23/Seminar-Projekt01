import { Box } from '@react-three/drei';
import { useBox } from '@react-three/cannon';
import { BufferGeometry, Mesh, Vector3 } from 'three';
import React from 'react';
import Shelter from './Shelter';

const boxes = [
    {
        position: new Vector3(3, 0, 5),
        scale: new Vector3(4, 1, 2),
    },
    {
        position: new Vector3(-3, 0, -5),
        scale: new Vector3(4, 1, 2),
    },
    {
        position: new Vector3(5, 0, -5),
        scale: new Vector3(2, 0.5, 1),
    },
    {
        position: new Vector3(-5, 0, 5),
        scale: new Vector3(2, 0.5, 1),
    },
];

/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */

function Obstacles(): JSX.Element {
    const [bigBoxRef] = useBox<Mesh<BufferGeometry>>(() => ({
        type: 'Static',
        args: [2, 2, 2],
        position: [0, 1, 0],
    }));

    const [cube1Ref] = useBox<Mesh<BufferGeometry>>(() => ({
        type: 'Static',
        args: [4, 1, 2],
        position: [3, 0, 5],
    }));

    const [cube2Ref] = useBox<Mesh<BufferGeometry>>(() => ({
        type: 'Static',
        args: [4, 1, 2],
        position: [-3, 0, -5],
    }));

    const [cube3Ref] = useBox<Mesh<BufferGeometry>>(() => ({
        type: 'Static',
        args: [2, 0.5, 1],
        position: [5, 0, -5],
    }));

    const [cube4Ref] = useBox<Mesh<BufferGeometry>>(() => ({
        type: 'Static',
        args: [2, 0.5, 1],
        position: [-5, 0, 5],
    }));

    return (
        <group>
            <mesh ref={bigBoxRef} castShadow receiveShadow>
                <boxGeometry args={[2, 2, 2, 4, 4, 4]} attach="geometry" />
                <meshPhongMaterial color="royalblue" attach="material" />
            </mesh>
            <group>
                <mesh ref={cube1Ref} castShadow receiveShadow>
                    <boxGeometry args={[4, 1, 2]} attach="geometry" />
                    <meshPhongMaterial color="blue" attach="material" />
                </mesh>
                <mesh ref={cube2Ref} castShadow receiveShadow>
                    <boxGeometry args={[4, 1, 2]} attach="geometry" />
                    <meshPhongMaterial color="blue" attach="material" />
                </mesh>
                <mesh ref={cube3Ref} castShadow receiveShadow>
                    <boxGeometry args={[2, 0.5, 1]} attach="geometry" />
                    <meshPhongMaterial color="blue" attach="material" />
                </mesh>
                <mesh ref={cube4Ref} castShadow receiveShadow>
                    <boxGeometry args={[2, 0.5, 1]} attach="geometry" />
                    <meshPhongMaterial color="blue" attach="material" />
                </mesh>
            </group>
            <Shelter />
        </group>
    );
}

// Memo to prevent re-render, when shadows are toogled
export default React.memo(Obstacles);
