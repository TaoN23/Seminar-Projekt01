function Lights({isActive}:{isActive: boolean}) {
    return ( 
        <>
            <ambientLight/>
            <pointLight castShadow={isActive} position={[5,5,5]} intensity={10}/>
        </>
     );
}

export default Lights;
