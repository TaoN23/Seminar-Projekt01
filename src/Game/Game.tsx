import { Physics } from '@react-three/cannon';
import { PointerLockControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import Playground from '../Playground/Playground';
import Bullethole from './Player/components/Bullethole';
import Player from './Player/Player';

function Game(): JSX.Element {
    const { camera } = useThree();
    const [click, setClick] = useState(0);
    return (
        <>
            <Physics gravity={[0, -10, 0]}>
                <Playground />
                <Player />
            </Physics>
            <PointerLockControls camera={camera} />
            <Bullethole />
        </>
    );
}

export default Game;
