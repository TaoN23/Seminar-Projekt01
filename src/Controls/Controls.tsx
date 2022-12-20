import { useReducer } from 'react';
import Camera from './Camera/Camera';
import PlaygroundUI from '../UI/debug/PlaygroundUI';
/* eslint-disable @typescript-eslint/ban-types */

export enum CAMERA_ACTIONS {
    SET_CONTROLTYPE = 'SET_CONTROLTYPE',
    SET_FOV = 'SET_FOV',
}

type Action = {
    action: CAMERA_ACTIONS;
    payload?: any;
};

type CameraSettings = {
    controlType: string;
    fov: number;
};

function dispatchCamera(state: CameraSettings, action: Action): CameraSettings {
    switch (action.action) {
        case CAMERA_ACTIONS.SET_CONTROLTYPE:
            console.log("dipatch");
            return { ...state, controlType: action.payload };
        case CAMERA_ACTIONS.SET_FOV:
            return { ...state, fov: action.payload };
        default:
            return state;
    }
}

function Controls({
    shadowsActive,
    setShadowsActive,
    helperActive,
    setHelperActive,
}: {
    shadowsActive: boolean;
    setShadowsActive: Function;
    helperActive: { grid: boolean; axis: boolean };
    setHelperActive: Function;
}): JSX.Element {
    const [cameraSettings, dispatchCameraSettings] = useReducer(
        dispatchCamera,
        { controlType: '', fov: 80 }
    );

    return (
        <>
            <Camera
                controlType={cameraSettings.controlType}
                fov={cameraSettings.fov}
            />
            <PlaygroundUI
                controlType={cameraSettings.controlType}
                dispatchCameraSettings={dispatchCameraSettings}
                shadowsActive={shadowsActive}
                setShadowsActive={setShadowsActive}
                helperActive={helperActive}
                setHelperActive={setHelperActive}
                fov={cameraSettings.fov}
            />
        </>
    );
}

export default Controls;
