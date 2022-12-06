import { OrbitControls, PerspectiveCamera, Text } from "@react-three/drei";
import { useRef, useState } from "react";
import { Euler, Vector3 } from "three";
import React from "react";

function Camera({controlType}: {controlType: string}) {
    const camera = useRef();
    const cameraOrientation = useRef({position: [0,1,5], rotation: [0,0,0]});
    

    return (
        <>
            <PerspectiveCamera
                makeDefault
                position={new Vector3(...cameraOrientation.current.position)}
                rotation={new Euler(...cameraOrientation.current.rotation)}
                ref={camera}
                >
            </PerspectiveCamera>

            {controlType == "Orbit" && <OrbitControls/>}
        </>
    );
}


// Memo for prevent re-rendering, camera leaves in position, when shadows are toogled
export default React.memo(Camera);
