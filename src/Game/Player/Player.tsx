import { PointerLockControls } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import PlayerControls from './components/PlayerControls';

function Player(): JSX.Element {
    return (
        <>
            <PointerLockControls />
            <PlayerControls />
        </>
    );
}

export default Player;
