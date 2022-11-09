import { Box } from "@react-three/drei";

function Border() {
    return ( 
        <>
        <group>
            <Box args={[20,.2,20,4,4,4]}>
               <meshPhongMaterial color={"green"}/>
            </Box>
            <group>
                <Box args={[20,2,.2,4,4,4]} position={[10,0,0]} rotation={[0,Math.PI/2,0]}>
                    <meshNormalMaterial/>
                </Box>
                <Box args={[20,2,.2,4,4,4]} position={[-10,0,0]} rotation={[0,Math.PI/2,0]}>
                    <meshNormalMaterial/>
                </Box>
                <Box args={[20,2,.2,4,4,4]} position={[0,0,10]}>
                    <meshNormalMaterial/>
                </Box>
                <Box args={[20,2,.2,4,4,4]} position={[0,0,-10]}>
                    <meshNormalMaterial/>
                </Box>
            </group>
        </group>
        </>
     );
}

export default Border;
