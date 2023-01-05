import { PerspectiveCamera } from '@react-three/drei';
import React, { useRef } from 'react';
import { Euler, Vector3 } from 'three';
import { CameraSettings } from '../../config/types/Playground/Camera/cameraTypes';

function Camera({ controlType, fov }: CameraSettings): JSX.Element {
    const camera = useRef();
    const cameraOrientation = useRef({
        position: [0, 1, 5],
        rotation: [0, 0, 0],
    });

    return (
        <PerspectiveCamera
            position={new Vector3(...cameraOrientation.current.position)}
            rotation={new Euler(...cameraOrientation.current.rotation)}
            ref={camera}
            fov={fov}
        />
    );
}

// Memo for prevent re-rendering, camera leaves in position, when shadows are toogled
export default React.memo(Camera);
