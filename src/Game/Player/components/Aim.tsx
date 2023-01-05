/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';

function Aim(): JSX.Element {
    const { camera } = useThree();
    const isZoom = useRef(false);

    const handleMouseDown = (event: any) => {
        if (event.button === 2) {
            isZoom.current = true;
        }
    };

    const handleMouseUp = (event: any) => {
        if (event.button === 2) {
            isZoom.current = false;
        }
    };

    useFrame(() => {
        if (isZoom.current && camera.zoom < 1.2) {
            camera.zoom += 0.02;
            camera.updateProjectionMatrix();
        }
        if (!isZoom.current && camera.zoom > 1) {
            camera.zoom -= 0.02;
            camera.updateProjectionMatrix();
        }
    });

    useEffect(() => {
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    });
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <></>;
}

export default Aim;
