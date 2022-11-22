import { useState } from "react";
import Camera from "./Camera/Camera";
import PlaygroundUI from "./components/PlaygroundUI";

function Controls() {
    const [controlType, setControlType] = useState("First Person");
    
    return ( 
        <>
        <Camera controlType={controlType}/>
        <PlaygroundUI controlType={controlType} setControlType={setControlType}/>
        </>
     );
}

export default Controls;