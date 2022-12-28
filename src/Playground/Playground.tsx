import Border from './components/Border';
import Helper from './components/Helper';
import Lights from './components/Lights';
import Obstacles from './components/Obstacles';
import Controls from '../Controls/Controls';

import PlaygroundProvider from '../config/provider/PlaygroundProvider';

function Playground(): JSX.Element {
    return (
        <>
            <Border />
            <Obstacles />
            <PlaygroundProvider>
                <Helper />
                <Lights />
                <Controls />
            </PlaygroundProvider>
        </>
    );
}

export default Playground;
