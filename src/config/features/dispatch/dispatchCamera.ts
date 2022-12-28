import {
    CameraSettings,
    Action,
    CAMERA_ACTIONS,
} from '../../types/Playground/Camera/cameraTypes';

export function dispatchCamera(
    state: CameraSettings,
    action: Action
): CameraSettings {
    const { type, payload } = action;

    switch (type) {
        case CAMERA_ACTIONS.SET_CONTROLTYPE:
            if (typeof payload === 'string') {
                return { ...state, controlType: payload };
            }
            return state;
        case CAMERA_ACTIONS.SET_FOV:
            if (typeof payload === 'number') {
                return { ...state, fov: payload };
            }
            return state;
        default:
            return state;
    }
}
