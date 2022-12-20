import { useReducer } from 'react';
import Camera from './Camera/Camera';
import PlaygroundUI from '../UI/debug/PlaygroundUI';
import { CameraSettings, Action, CAMERA_ACTIONS } from '../config/types/Camera/cameraTypes';
/* eslint-disable @typescript-eslint/ban-types */


function dispatchCamera(state: CameraSettings, action: Action): CameraSettings {    
    const { type, payload } = action;

    switch (type) {
        case CAMERA_ACTIONS.SET_CONTROLTYPE:
            console.log("dipatch");
            return { ...state, controlType: payload };
        case CAMERA_ACTIONS.SET_FOV:
            return { ...state, fov: payload };
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
                dispatchCameraSettings={dispatchCameraSettings}
                shadowsActive={shadowsActive}
                setShadowsActive={setShadowsActive}
                helperActive={helperActive}
                setHelperActive={setHelperActive}
                cameraSettings={cameraSettings}
            />
        </>
    );
}

export default Controls;
