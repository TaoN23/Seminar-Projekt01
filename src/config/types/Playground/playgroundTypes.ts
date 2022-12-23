export type PlaygroundSettings = {
    shadowsActive: boolean;
    helperActive: helperActive;
};

type helperActive = {
    grid: boolean;
    axis: boolean;
};

export enum PLAYGROUND_SETTINGS_ACTIONS {
    TOGGLE_SHADOWS,
    TOGGLE_HELPER,
}

export type Action = {
    type: PLAYGROUND_SETTINGS_ACTIONS;
    payload?: helperActive | boolean | undefined;
};
