import { OrbitControls, PerspectiveCamera, Text } from "@react-three/drei";
import { useRef, useState } from "react";

function Camera() {
    const [mode, setMode] = useState(false);

    const camera = useRef();

    const handleModeChange = () => {
        
        setMode((prevMode)=> !prevMode);
    }

    return (
        <>
            <PerspectiveCamera
                makeDefault
                position={[0, 1, 5]}
                rotation={[0, 0, 0]}
                ref={camera}
                >
                <Text position={[0,0,-1]} onClick={handleModeChange}>
                    {mode ? "Orbitcontrols" : "First Person"}
                </Text>
            </PerspectiveCamera>

            {mode && <OrbitControls/>}
        </>
    );
}

export default Camera;
