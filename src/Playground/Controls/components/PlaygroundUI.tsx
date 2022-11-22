import { Html } from "@react-three/drei";
import React from "react";
import "../style/PlaygroundUI.css"

function PlaygroundUI({controlType, setControlType}: {controlType: string, setControlType: Function}) {
    const handleControlChange = (event: React.ChangeEvent<HTMLSelectElement>) =>{
        setControlType(event.target.value);
    }
    
    return ( <>
    {/**
     * using <Html from drei, because you cant create a portal inside the Canvas, that renders outside
     */}
        <Html as="div" className="playground-ui">
            <select itemID={controlType} onChange={handleControlChange}>
            <option>First Person</option>
            <option>Orbit</option>
            </select>
        </Html>
    </> );
}

export default PlaygroundUI;