import React, { useEffect, useState } from 'react';
import { generateUUID } from 'three/src/math/MathUtils';
import Bullethole from './components/Bullethole';

function Bulletholes(): JSX.Element {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [holes, setHoles] = useState<Array<any>>([]);

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const handleClick = (event: any) => {
        if (event.button === 0) {
            setHoles((prev) => {
                return [...prev, <Bullethole key={generateUUID()} />];
            });
        }
    };

    useEffect(() => {
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    });
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{holes}</>;
}

export default Bulletholes;
