import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Playground from './Playground/Playground';

function App(): JSX.Element {
    return (
        <Canvas shadows>
            <Playground />
            <Sky />
        </Canvas>
    );
}

export default App;
