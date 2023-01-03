import {
    PlaygroundSettings,
    Action,
    PLAYGROUND_SETTINGS_ACTIONS,
} from '../../types/Playground/playgroundTypes';

export function dispatchPlayground(
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

            if (payload.grid === undefined) {
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
