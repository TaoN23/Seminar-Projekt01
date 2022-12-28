import { Box } from '@react-three/drei';
import { Vector3 } from 'three';
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
    return (
        <group>
            <Box
                castShadow
                receiveShadow
                args={[2, 2, 2, 4, 4, 4]}
                position={[0, 1, 0]}
            >
                <meshPhongMaterial color="royalblue" />
            </Box>
            <group>
                {boxes.map((box: JSX.IntrinsicElements['mesh'], index) => {
                    return (
                        <mesh castShadow receiveShadow key={index} {...box}>
                            <boxGeometry />
                            <meshPhongMaterial color="blue" />
                        </mesh>
                    );
                })}
            </group>
            <Shelter />
        </group>
    );
}

// Memo to prevent re-render, when shadows are toogled
export default React.memo(Obstacles);
