import React, { useContext } from 'react';
import PlaygroundSettingsContext from '../../config/store/playground-settings-context';

function Helper(): JSX.Element {
    const isActive = useContext(PlaygroundSettingsContext);
    return (
        <>
            {
                // position: damit die helper über dem Boden sind und sich nicht überschneiden
            }
            {isActive.playgroundSettings.helperActive.grid && (
                <gridHelper args={[40, 40, 40]} position={[0, 0.11, 0]} />
            )}
            {isActive.playgroundSettings.helperActive.axis && (
                <axesHelper args={[30]} position={[0, 0.12, 0]} />
            )}
        </>
    );
}

export default React.memo(Helper);
