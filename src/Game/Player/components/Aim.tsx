/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';

function Aim(): JSX.Element {
    const { camera } = useThree();

    const handleMouseDown = (event: any) => {
        if (event.button === 2) {
            camera.zoom = 2;
            camera.updateProjectionMatrix();
        }
    };

    const handleMouseUp = (event: any) => {
        if (event.button === 2) {
            camera.zoom = 1;
            camera.updateProjectionMatrix();
        }
    }

    useEffect(() => {
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    });
    return <></>;
}

export default Aim;
