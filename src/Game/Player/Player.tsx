import { PointerLockControls } from '@react-three/drei';
import PlayerControls from './components/PlayerControls';

function Player(): JSX.Element {
    return (
        <>
            <PlayerControls />
            <PointerLockControls />
        </>
    );
}

export default Player;
