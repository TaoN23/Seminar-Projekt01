import { useState, useReducer } from 'react';
import Border from './components/Border';
import Helper from './components/Helper';
import Lights from './components/Lights';
import Obstacles from './components/Obstacles';
import Controls from '../Controls/Controls';


export type PlaygroundSettings = {
    shadowsActive: boolean,
    helperActive: {grid: boolean, axis: boolean}
}

export enum PLAYGROUND_SETTINGS_ACTIONS {
    TOOGLE_SHADOWS,
}

type Action = {
    type: PLAYGROUND_SETTINGS_ACTIONS;
    payload?: any;
}

function dispatchPlayground(state: PlaygroundSettings, action: Action){
    const { type, payload } = action;

    switch (type) {
        case PLAYGROUND_SETTINGS_ACTIONS.TOOGLE_SHADOWS:
            return {...state, shadowsActive: ()=>!state.shadowsActive}
    
        default:
            break;
    }
    return state;
}

function Playground(): JSX.Element {
    const [shadowsActive, setShadowsActive] = useState(true);
    const [helperActive, setHelperActive] = useState({
        grid: true,
        axis: true,
    });

    const [playgroundSettings, dispatchPlaygroundSettings] = useReducer(dispatchPlayground, {shadowsActive: true, helperActive: {grid: true, axis: true}});

    const shadowsToogle = (): void => {
        setShadowsActive((prev) => !prev);
    };

    const helperToogle = ({
        grid,
        axis,
    }: {
        grid: boolean;
        axis: boolean;
    }): void => {
        setHelperActive((prev) => {
            if (grid === null) {
                return { grid: prev.grid, axis };
            }
            return { grid, axis: prev.axis };
        });
    };

    return (
        <>
            <Border />
            <Obstacles />
            <Helper isActive={helperActive} />
            <Lights isActive={shadowsActive} />
            <Controls
                playgroundSettings={playgroundSettings}
                dispatchPlaygroundSettings={dispatchPlaygroundSettings}
            />
        </>
    );
}

export default Playground;
