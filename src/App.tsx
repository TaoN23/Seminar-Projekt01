import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { PCFSoftShadowMap } from 'three';
import Game from './Game/Game';
import Crosshair from './UI/production/Crosshair';

function App(): JSX.Element {
    return (
        <>
            <div style={{ width: '100%', zIndex: 10, position: 'fixed' }}>
                <Crosshair />
            </div>
            <Canvas
                gl={{ antialias: true }}
                shadows={{ type: PCFSoftShadowMap }}
                style={{ zIndex: 1 }}
            >
                <Sky />
                <Game />
            </Canvas>
        </>
    );
}

export default App;
