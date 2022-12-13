import {
    Box,
    OrbitControls,
    PerspectiveCamera,
    Sky,
    Stats,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Camera from './Playground/Controls/Camera/Camera';
import Playground from './Playground/Playground';

function App() {
    return (
        <Canvas shadows>
            <Playground />
            <Sky />
        </Canvas>
    );
}

export default App;
