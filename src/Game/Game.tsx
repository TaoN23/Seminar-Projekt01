import { Physics } from '@react-three/cannon';
import { PointerLockControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import Playground from '../Playground/Playground';
import Crosshair from '../UI/production/Crosshair';
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
            <Crosshair />
        </>
    );
}

export default Game;
