import { useMemo, useReducer } from 'react';
import { dispatchPlayground } from '../features/dispatch/playgroundSettingsDispatch';
import PlaygroundSettingsContext from '../store/playground-settings-context';

function PlaygroundProvider({
    children,
}: {
    children: JSX.Element[];
}): JSX.Element {
    const [playgroundSettings, dispatchPlaygroundSettings] = useReducer(
        dispatchPlayground,
        {
            shadowsActive: true,
            helperActive: { grid: true, axis: true },
        }
    );

    const providerValue = useMemo(() => {
        return {
            playgroundSettings,
            dispatchPlaygroundSettings,
        };
    }, [playgroundSettings]);

    return (
        <PlaygroundSettingsContext.Provider value={providerValue}>
            {children}
        </PlaygroundSettingsContext.Provider>
    );
}

export default PlaygroundProvider;
