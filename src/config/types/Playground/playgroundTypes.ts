export type PlaygroundSettings = {
    shadowsActive: boolean;
    helperActive: { grid: boolean; axis: boolean };
};

export enum PLAYGROUND_SETTINGS_ACTIONS {
    TOGGLE_SHADOWS,
    TOGGLE_HELPER,
}

export type Action = {
    type: PLAYGROUND_SETTINGS_ACTIONS;
    payload?: any;
};
