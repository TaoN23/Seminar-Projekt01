import { useState } from 'react';
import Border from './components/Border';
import Helper from './components/Helper';
import Lights from './components/Lights';
import Obstacles from './components/Obstacles';
import Controls from './Controls/Controls';

function Playground(): JSX.Element {
    const [shadowsActive, setShadowsActive] = useState(true);
    const [helperActive, setHelperActive] = useState({
        grid: true,
        axis: true,
    });

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
                shadowsActive={shadowsActive}
                setShadowsActive={shadowsToogle}
                helperActive={helperActive}
                setHelperActive={helperToogle}
            />
        </>
    );
}

export default Playground;
