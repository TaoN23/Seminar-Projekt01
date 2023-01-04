import { useSphere } from '@react-three/cannon';
import { SphereGeometryProps, useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Mesh, Object3D, Sphere, SphereGeometry, Vector3 } from 'three';
import { useKeyboard } from '../../../config/features/hooks/useKeyboard';

function PlayerControls(): JSX.Element {
    const { camera } = useThree();
    const [playerBoundingboxRef, playerBoundingboxAPI] = useSphere<Mesh>(
        () => ({
            mass: 1,
            type: 'Dynamic',
            args: [0.5],
            position: [-2, 1, 0],
        })
    );
    const foo = useKeyboard();
    console.log(foo);
    
    const playerPosition = useRef<number[]>([0, 0, 0]);
    const playerVelocity = useRef<number[]>([0, 0, 0]);

    useEffect(() => {
        playerBoundingboxAPI.position.subscribe((newPosition) => {
            playerPosition.current = newPosition;
        });
    }, [playerBoundingboxAPI.position]);

    useEffect(() => {
        playerBoundingboxAPI.velocity.subscribe((newVelocity) => {
            playerVelocity.current = newVelocity;
        });
    }, [playerBoundingboxAPI.velocity]);

    useFrame(() => {
        camera.position.copy(
            new Vector3(
                playerPosition.current[0],
                playerPosition.current[1],
                playerPosition.current[2]
            )
        );
    });

    return <mesh ref={playerBoundingboxRef} />;
}

export default PlayerControls;
