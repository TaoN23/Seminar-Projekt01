import { useReducer } from 'react';
import Camera from './Camera/Camera';
import PlaygroundUI from '../UI/debug/PlaygroundUI';
import {
    CameraSettings,
    Action,
    CAMERA_ACTIONS,
} from '../config/types/Playground/Camera/cameraTypes';
import { PlaygroundSettings } from '../config/types/Playground/playgroundTypes';

/* eslint-disable @typescript-eslint/ban-types */

function dispatchCamera(state: CameraSettings, action: Action): CameraSettings {
    const { type, payload } = action;

    switch (type) {
        case CAMERA_ACTIONS.SET_CONTROLTYPE:
            console.log('dipatch');
            return { ...state, controlType: payload };
        case CAMERA_ACTIONS.SET_FOV:
            return { ...state, fov: payload };
        default:
            return state;
    }
}

function Controls({
    playgroundSettings,
    dispatchPlaygroundSettings,
}: {
    playgroundSettings: PlaygroundSettings;
    dispatchPlaygroundSettings: Function;
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
                cameraSettings={cameraSettings}
                dispatchCameraSettings={dispatchCameraSettings}
                playgroundSettings={playgroundSettings}
                dispatchPlaygroundSettings={dispatchPlaygroundSettings}
            />
        </>
    );
}

export default Controls;
