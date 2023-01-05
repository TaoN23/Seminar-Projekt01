import { Suspense } from 'react';
import { BakeShadows } from '@react-three/drei';

import Border from './components/Border';
import Helper from './components/Helper';
import Lights from './components/Lights';
import Obstacles from './components/Obstacles';
import Controls from '../Controls/Controls';

import PlaygroundProvider from '../config/provider/PlaygroundProvider';

function Playground(): JSX.Element {
    return (
        <>
            <Suspense fallback={null}>
                <Border />
                <Obstacles />
                <BakeShadows />
            </Suspense>
            <PlaygroundProvider>
                <Lights />
                <Controls />
            </PlaygroundProvider>
        </>
    );
}

export default Playground;
