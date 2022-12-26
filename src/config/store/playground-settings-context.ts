import React from 'react';
import {
    PlaygroundSettingsContextType,
    Action,
} from '../types/Playground/playgroundTypes';

/* eslint-disable @typescript-eslint/no-empty-function */

const PlaygroundSettingsContext = React.createContext<PlaygroundSettingsContextType>(
    {
        playgroundSettings: {
            shadowsActive: true,
            helperActive: { grid: true, axis: true },
        },
        dispatchPlaygroundSettings: ({ type, payload }: Action): void => {},
    }
);

export default PlaygroundSettingsContext;
