import { useReducer } from 'react';
import Border from './components/Border';
import Helper from './components/Helper';
import Lights from './components/Lights';
import Obstacles from './components/Obstacles';
import Controls from '../Controls/Controls';

import {
    PlaygroundSettings,
    Action,
    PLAYGROUND_SETTINGS_ACTIONS,
    PlaygroundSettingsContextType,
} from '../config/types/Playground/playgroundTypes';
import PlaygroundSettingsContext from '../config/store/playground-settings-context';

function dispatchPlayground(
    state: PlaygroundSettings,
    action: Action
): PlaygroundSettings {
    const { type, payload } = action;

    switch (type) {
        case PLAYGROUND_SETTINGS_ACTIONS.TOGGLE_SHADOWS:
            return {
                ...state,
                shadowsActive: !state.shadowsActive,
            };
        case PLAYGROUND_SETTINGS_ACTIONS.TOGGLE_HELPER:
            if (
                typeof payload === 'undefined' ||
                typeof payload === 'boolean'
            ) {
                return state;
            }

            if (payload.grid == null) {
                return {
                    ...state,
                    helperActive: {
                        grid: state.helperActive.grid,
                        axis: payload.axis,
                    },
                };
            }
            return {
                ...state,
                helperActive: {
                    grid: payload.grid,
                    axis: state.helperActive.axis,
                },
            };
        default:
            return state;
    }
}

function Playground(): JSX.Element {
    const [playgroundSettings, dispatchPlaygroundSettings] = useReducer(
        dispatchPlayground,
        {
            shadowsActive: true,
            helperActive: { grid: true, axis: true },
        }
    );

    return (
        <>
            <Border />
            <Obstacles />
            <Helper isActive={playgroundSettings.helperActive} />
            <Lights isActive={playgroundSettings.shadowsActive} />
            <PlaygroundSettingsContext.Provider
                value={{
                    playgroundSettings,
                    dispatchPlaygroundSettings,
                }}
            >
                <Controls />
            </PlaygroundSettingsContext.Provider>
        </>
    );
}

export default Playground;
