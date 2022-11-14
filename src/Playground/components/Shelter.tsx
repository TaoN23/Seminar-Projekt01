import {Box} from "@react-three/drei";

function Shelter() {
    return ( 
        <>
            <group>
                <Box args={[5,4,.2,4,4,2]} position={[7.5,0,5]}>
                    <meshPhongMaterial color={"lightgrey"}/>
                </Box>
                <Box args={[5,.2,5,4,2,4]} position={[7.5,2,7.5]}>
                    <meshPhongMaterial color={"lightgrey"}/>
                </Box>
            </group>
        </>
     );
}

export default Shelter;
