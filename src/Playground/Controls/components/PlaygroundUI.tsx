import { Html } from "@react-three/drei";

function PlaygroundUI() {
    return ( <>
    {/**
     * using <Html from drei, because you cant create a portal inside the Canvas, that renders outside
     */}
        <Html as="div">
            <div>
                hi
            </div>
        </Html>
    </> );
}

export default PlaygroundUI;