import { useSphere } from '@react-three/cannon';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Mesh, Vector3 } from 'three';
import { useKeyboard } from '../../../config/features/hooks/useKeyboard';
import { Keys } from '../../../config/types/hookTypes';

const KEYS: Keys[] = [
    {
        key: 'KeyW',
        returnType: 'forward',
    },
    {
        key: 'KeyS',
        returnType: 'backward',
    },
    {
        key: 'KeyA',
        returnType: 'left',
    },
    {
        key: 'KeyD',
        returnType: 'right',
    },
    {
        key: 'Space',
        returnType: 'jump',
    },
    {
        key: 'ShiftLeft',
        returnType: 'sprint',
    },
    {
        key: 'KeyC',
        returnType: 'crouch',
    },
    {
        key: 'AltLeft',
        returnType: 'lie',
    }
];

function PlayerControls(): JSX.Element {
    const { camera } = useThree();
    const [playerBoundingboxRef, playerBoundingboxAPI] = useSphere<Mesh>(
        () => ({
            mass: 1,
            type: 'Dynamic',
            args: [0.8], //  "height"
            position: [-2, 1, 0],
        })
    );

    const directions = useKeyboard(KEYS);

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
                playerPosition.current[1] +
                    0.01 * Math.sin(10 * playerPosition.current[0]),
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
            .multiplyScalar(directions?.sprint ? 3.5 : 2)
            .applyEuler(camera.rotation);

        playerBoundingboxAPI.velocity.set(
            direction.x,
            playerVelocity.current[1],
            direction.z
        );

        if (
            directions?.jump &&
            Math.abs(playerVelocity.current[1]) < 0.05 &&
            playerPosition.current[1] < 1.3 // 1,4 da größe 0.8 und obstacles maximal 1
        ) {
            playerBoundingboxAPI.velocity.set(
                playerVelocity.current[0],
                3,
                playerVelocity.current[2]
            );
        }



        if (
            directions?.crouch &&
            Math.abs(playerVelocity.current[1]) < 0.05 &&
            playerPosition.current[1] < 1.3 // 1,4 da größe 0.8 und obstacles maximal 1
        ) {
            /*playerBoundingboxAPI.velocity.set(
                0,//playerVelocity.current[0],
                -3,//3,
                0,//playerVelocity.current[2]
            );*/
            camera.position.y -= 0.3;
        }

        if (
            directions?.lie &&
            Math.abs(playerVelocity.current[1]) < 0.05 &&
            playerPosition.current[1] < 1.3 // 1,4 da größe 0.8 und obstacles maximal 1
        ) {
            /*playerBoundingboxAPI.velocity.set(
                0,//playerVelocity.current[0],
                -3,//3,
                0,//playerVelocity.current[2]
            );*/
            camera.position.y -= 0.6;
        }
    });

    return <mesh ref={playerBoundingboxRef} />;
}

export default PlayerControls;
