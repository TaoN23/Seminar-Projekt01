import {Box} from "@react-three/drei";
import { Vector3 } from "three";
import Shelter from "./Shelter";

const boxes = [
    {
        position: new Vector3(3,0,5),
        scale: new Vector3(4,1,2),
    },
    {
        position: new Vector3(-3,0,-5),
        scale: new Vector3(4,1,2),
    },
    {
        position: new Vector3(5,0,-5),
        scale: new Vector3(2,.5,1),
    },
    {
        position: new Vector3(-5,0,5),
        scale: new Vector3(2,.5,1),
    },
]

function Obstacles() {
    return ( 
        <>
            <group>
                <Box args={[2,2,2,4,4,4]} position={[0,1,0]}>
                    <meshPhongMaterial color={"royalblue"}/>
                </Box>
                <group>
                    {
                        boxes.map((box: JSX.IntrinsicElements['mesh'], index)=>{
                            return(
                                // ignore Box-error
                                // @ts-expect-error
                                <Box key={index} {...box}>
                                    <meshPhongMaterial color={"blue"}/>
                                </Box>
                            )
                        })
                    }
                </group>
                <Shelter/>
            </group>
        </>
     );
}

export default Obstacles;
