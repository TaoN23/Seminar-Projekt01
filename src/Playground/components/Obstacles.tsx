import {Box} from "@react-three/drei";

function Obstacles() {
    return ( 
        <>
            <group>
                <Box args={[2,2,2,4,4,4]} position={[0,1,0]}>
                    <meshPhongMaterial color={"royalblue"}/>
                </Box>
            </group>
        </>
     );
}

export default Obstacles;
