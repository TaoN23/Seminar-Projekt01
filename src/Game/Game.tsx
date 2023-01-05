import { Physics } from '@react-three/cannon';
import { Hud, PointerLockControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import Playground from '../Playground/Playground';
import Crosshair from '../UI/production/Crosshair';
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
            <Hud>
                <Crosshair />
            </Hud>
        </>
    );
}

export default Game;
