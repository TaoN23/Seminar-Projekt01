import { Physics } from '@react-three/cannon';
import { CameraShake, PointerLockControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import Playground from '../Playground/Playground';
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
        </>
    );
}

export default Game;
