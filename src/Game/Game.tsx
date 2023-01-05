import { Physics } from '@react-three/cannon';
import { PointerLockControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import Playground from '../Playground/Playground';
import Bulletholes from './Bulletholes/Bulletholes';
import Player from './Player/Player';

function Game(): JSX.Element {
    const { camera } = useThree();
    return (
        <>
            <Physics gravity={[0, -10, 0]}>
                <Playground />
                <Player />
            </Physics>
            <PointerLockControls camera={camera} />
            <Bulletholes />
        </>
    );
}

export default Game;
