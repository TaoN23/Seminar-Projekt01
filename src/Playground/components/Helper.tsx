function Helper({ isActive }: { isActive: { grid: boolean; axis: boolean } }) {
    return (
        <>
            {
                //position: damit die helper über dem Boden sind und sich nicht überschneiden
            }
            {isActive.grid && (
                <gridHelper args={[40, 40, 40]} position={[0, 0.11, 0]} />
            )}
            {isActive.axis && (
                <axesHelper args={[30]} position={[0, 0.12, 0]} />
            )}
        </>
    );
}

export default Helper;
