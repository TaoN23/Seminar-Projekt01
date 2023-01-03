import React, { useContext } from 'react';
import PlaygroundSettingsContext from '../../config/store/playground-settings-context';

function Lights(): JSX.Element {
    const isActive = useContext(PlaygroundSettingsContext);
    return (
        <>
            <ambientLight />
            <pointLight
                castShadow={isActive.playgroundSettings.shadowsActive}
                position={[5, 5, 5]}
                intensity={10}
            />
        </>
    );
}

export default React.memo(Lights);
