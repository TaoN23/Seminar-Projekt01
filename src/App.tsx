import { PointerLockControls, Sky } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { PCFSoftShadowMap, ShadowMapType } from 'three';
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
