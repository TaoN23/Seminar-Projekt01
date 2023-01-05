export type PlaygroundSettings = {
    shadowsActive: boolean;
    helperActive: helperActive;
};

type helperActive = {
    grid: boolean | undefined;
    axis: boolean | undefined;
};

export enum PLAYGROUND_SETTINGS_ACTIONS {
    TOGGLE_SHADOWS,
    TOGGLE_HELPER,
}

export type Action = {
    type: PLAYGROUND_SETTINGS_ACTIONS;
    payload?: helperActive | boolean | undefined;
};

export type PlaygroundSettingsContextType = {
    playgroundSettings: PlaygroundSettings;
    dispatchPlaygroundSettings: ({ type, payload }: Action) => void;
};
