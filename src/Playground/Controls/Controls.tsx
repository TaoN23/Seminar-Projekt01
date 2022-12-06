import { useState } from "react";
import Camera from "./Camera/Camera";
import PlaygroundUI from "./components/PlaygroundUI";

function Controls({shadowsActive, setShadowsActive}: {shadowsActive: boolean; setShadowsActive: Function}) {
    const [controlType, setControlType] = useState("First Person");
    
    return ( 
        <>
        <Camera controlType={controlType}/>
        <PlaygroundUI controlType={controlType} setControlType={setControlType} shadowsActive={shadowsActive} setShadowsActive={setShadowsActive}/>
        </>
     );
}

export default Controls;
