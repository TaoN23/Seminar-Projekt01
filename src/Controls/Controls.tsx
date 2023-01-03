import { useReducer } from 'react';
import Camera from './Camera/Camera';
import PlaygroundUI from '../UI/debug/PlaygroundUI';
import { dispatchCamera } from '../config/features/dispatch/dispatchCamera';
/* eslint-disable @typescript-eslint/ban-types */

function Controls(): JSX.Element {
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
            />
        </>
    );
}

export default Controls;
