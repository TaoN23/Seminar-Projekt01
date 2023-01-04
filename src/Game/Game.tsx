import { Physics } from '@react-three/cannon';
import { PointerLockControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import Playground from '../Playground/Playground';
import Player from './Player/Player';

function Game(): JSX.Element {
    const { camera } = useThree();
    return (
        <>
            <Physics>
                <Playground />
                <Player />
            </Physics>
            <PointerLockControls camera={camera} />
        </>
    );
}

export default Game;
