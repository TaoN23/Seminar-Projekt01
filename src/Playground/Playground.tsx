import { useState } from "react";
import Border from "./components/Border";
import Lights from "./components/Lights";
import Obstacles from "./components/Obstacles";
import Controls from "./Controls/Controls";

function Playground() {
    const [shadowsActive, setShadowsActive] = useState(true);

    const shadowsToogle = () =>{
        console.log(shadowsActive);
        
        setShadowsActive(prev => !prev);
    }

    return ( 
        <>
            <Border/>
            <Obstacles/>
            <Lights isActive={shadowsActive}/>
            <Controls shadowsActive={shadowsActive} setShadowsActive={shadowsToogle}/>
        </>
     );
}

export default Playground;
