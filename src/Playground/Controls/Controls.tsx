import { useState } from "react";
import Camera from "./Camera/Camera";
import PlaygroundUI from "./components/PlaygroundUI";

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
}) {
    const [controlType, setControlType] = useState("First Person");

    return (
        <>
            <Camera controlType={controlType} />
            <PlaygroundUI
                controlType={controlType}
                setControlType={setControlType}
                shadowsActive={shadowsActive}
                setShadowsActive={setShadowsActive}
                helperActive={helperActive}
                setHelperActive={setHelperActive}
            />
        </>
    );
}

export default Controls;
