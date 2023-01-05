import Aim from './components/Aim';
import PlayerControls from './components/PlayerControls';

function Player(): JSX.Element {
    return (
        <>
            <PlayerControls />
            <Aim />
        </>
    );
}

export default Player;
