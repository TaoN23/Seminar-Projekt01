import { Box } from "@react-three/drei";
import { Vector3 } from "three";
import Shelter from "./Shelter";

const boxes = [
    {
        position: new Vector3(3, 0, 5),
        scale: new Vector3(4, 1, 2),
    },
    {
        position: new Vector3(-3, 0, -5),
        scale: new Vector3(4, 1, 2),
    },
    {
        position: new Vector3(5, 0, -5),
        scale: new Vector3(2, 0.5, 1),
    },
    {
        position: new Vector3(-5, 0, 5),
        scale: new Vector3(2, 0.5, 1),
    },
];

function Obstacles() {
    return (
        <>
            <group>
                <Box
                    castShadow
                    receiveShadow
                    args={[2, 2, 2, 4, 4, 4]}
                    position={[0, 1, 0]}
                >
                    <meshPhongMaterial color={"royalblue"} />
                </Box>
                <group>
                    {boxes.map((box: JSX.IntrinsicElements["mesh"], index) => {
                        return (
                            <mesh castShadow receiveShadow key={index} {...box}>
                                <boxGeometry />
                                <meshPhongMaterial color={"blue"} />
                            </mesh>
                        );
                    })}

                </group>
                <Shelter />
            </group>
        </>
    );
}

export default Obstacles;
