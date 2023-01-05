import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { PCFSoftShadowMap } from 'three';
import Game from './Game/Game';

function App(): JSX.Element {
    return (
        <Canvas gl={{ antialias: true }} shadows={{ type: PCFSoftShadowMap }}>
            <Sky />
            <Game />
        </Canvas>
    );
}

export default App;
