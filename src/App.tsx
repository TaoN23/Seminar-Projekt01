import { PointerLockControls, Sky } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import Game from './Game/Game';

function App(): JSX.Element {
    return (
        <Canvas shadows>
            <Sky />
            <Game />
        </Canvas>
    );
}

export default App;
