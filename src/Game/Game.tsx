import { Physics } from '@react-three/cannon';
import Playground from '../Playground/Playground';
import Player from './Player/Player';

function Game(): JSX.Element {
    return (
        <Physics>
            <Playground />
            <Player />
        </Physics>
    );
}

export default Game;
