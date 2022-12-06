import { Html } from "@react-three/drei";
import React, { useState } from "react";
import "../style/PlaygroundUI.css";

function PlaygroundUI({
    controlType,
    setControlType,
    shadowsActive,
    setShadowsActive,
    helperActive,
    setHelperActive,
    fov,
    setFov,
}: {
    controlType: string;
    setControlType: Function;
    shadowsActive: boolean;
    setShadowsActive: Function;
    helperActive: { grid: boolean; axis: boolean };
    setHelperActive: Function;
    fov: number;
    setFov: Function;
}) {
    const [isVisible, setIsVisible] = useState(false);

    const handleControlChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setControlType(event.target.value);
    };

    const handleMenuToogle = () => {
        setIsVisible((prev) => !prev);
    };

    const handleShadowsCheckboxChange = () => {
        setShadowsActive();
    };

    const handleGridHelperCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setHelperActive({ grid: event.target.checked, axis: null });
    };

    const handleAxisHelperCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setHelperActive({ grid: null, axis: event.target.checked });
    };

    const handleFovSliderChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setFov(event.target.value);
    };

    return (
        <>
            {/**
             * using <Html from drei, because you cant create a portal inside the Canvas, that renders outside
             */}
            <Html as="div" className="playground-ui__wrapper">
                <button
                    onClick={handleMenuToogle}
                    className="playground-ui__toogleButton"
                >
                    {isVisible ? ">" : "<"}
                </button>
                <div
                    className={
                        isVisible
                            ? "playground-ui__enabled"
                            : "playground-ui__disabled"
                    }
                >
                    <div className="playground-ui__cameraMode">
                        <h3>Camera mode</h3>
                        <select
                            itemID={controlType}
                            onChange={handleControlChange}
                        >
                            <option>First Person</option>
                            <option>Orbit</option>
                        </select>
                    </div>

                    <div className="playground-ui__shadows">
                        <h3>Shadows</h3>
                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    id="shadows"
                                    checked={shadowsActive}
                                    onChange={handleShadowsCheckboxChange}
                                />
                                shadows
                            </label>
                            <label>
                                <input type="checkbox" id="contact-shadows" />
                                contact-shadows
                            </label>
                        </div>
                    </div>

                    <div className="playground-ui__helper">
                        <h3>Helper</h3>
                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    id="gridhelper"
                                    checked={helperActive.grid}
                                    onChange={handleGridHelperCheckboxChange}
                                />
                                Grid
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    id="axishelper"
                                    checked={helperActive.axis}
                                    onChange={handleAxisHelperCheckboxChange}
                                />
                                Axis
                            </label>
                        </div>
                    </div>

                    <div className="playground-ui__fov">
                        <h3>fov</h3>
                        <div>
                            <label>
                                <input
                                    type="range"
                                    id="fov"
                                    min={50}
                                    max={120}
                                    value={fov}
                                    onChange={handleFovSliderChange}
                                    step={1}
                                />
                                fov: {fov}
                            </label>
                        </div>
                    </div>
                </div>
            </Html>
        </>
    );
}

export default PlaygroundUI;
