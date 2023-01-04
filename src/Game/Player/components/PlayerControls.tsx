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

    const directions = useKeyboard();

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

        const direction = new Vector3();

        const frontVector = new Vector3(
            0,
            0,
            (directions?.backward ? 1 : 0) - (directions?.forward ? 1 : 0)
        );

        const sideVector = new Vector3(
            (directions?.left ? 1 : 0) - (directions?.right ? 1 : 0),
            0,
            0
        );

        direction
            .subVectors(frontVector, sideVector)
            .normalize()
            .multiplyScalar(4)
            .applyEuler(camera.rotation);

        playerBoundingboxAPI.velocity.set(
            direction.x,
            playerVelocity.current[1],
            direction.z
        );
    });

    return <mesh ref={playerBoundingboxRef} />;
}

export default PlayerControls;
