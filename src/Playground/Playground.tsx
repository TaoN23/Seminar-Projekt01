import { useState } from "react";
import Border from "./components/Border";
import Helper from "./components/Helper";
import Lights from "./components/Lights";
import Obstacles from "./components/Obstacles";
import Controls from "./Controls/Controls";

function Playground() {
    const [shadowsActive, setShadowsActive] = useState(true);
    const [helperActive, setHelperActive] = useState({grid: true, axis: true});


    const shadowsToogle = () =>{
        console.log(shadowsActive);
        
        setShadowsActive(prev => !prev);
    }

    const helperToogle = ({grid, axis}: {grid: boolean, axis: boolean}) =>{
        setHelperActive((prev)=>{
            if (grid === null) {
                return {grid: prev.grid, axis: axis}
            }
            return {grid: grid, axis: prev.axis}
        })
    }

    

    return ( 
        <>
            <Border/>
            <Obstacles/>
            <Helper isActive={helperActive}/>
            <Lights isActive={shadowsActive}/>
            <Controls shadowsActive={shadowsActive} setShadowsActive={shadowsToogle} helperActive={helperActive} setHelperActive={helperToogle}/>
        </>
     );
}

export default Playground;
