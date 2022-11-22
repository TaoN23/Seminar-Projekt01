import { OrbitControls, PerspectiveCamera, Text } from "@react-three/drei";
import { useRef, useState } from "react";
import { Euler, Vector3 } from "three";

function Camera() {
    const [mode, setMode] = useState(false);
    const camera = useRef();
    const cameraOrientation = useRef({position: [0,1,5], rotation: [0,0,0]});
    
    const handleModeChange = () => {
        setMode((prevMode)=> !prevMode);
    }

    return (
        <>
            <PerspectiveCamera
                makeDefault
                position={new Vector3(...cameraOrientation.current.position)}
                rotation={new Euler(...cameraOrientation.current.rotation)}
                ref={camera}
                >
                <Text position={[0.8,0.42,-1]} fontSize={0.03} color={"red"} onClick={handleModeChange}>
                    {mode ? "Orbitcontrols" : "First Person"}
                </Text>
            </PerspectiveCamera>

            {mode && <OrbitControls/>}
        </>
    );
}

export default Camera;
