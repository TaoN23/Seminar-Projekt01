import { Html } from '@react-three/drei';
import './style/crosshair.css';

function Crosshair(): JSX.Element {
    return (
        <Html>
            <div className="crosshair">
                <div className="crosshair-top" />
                <div className="crosshair-bottom" />
                <div className="crosshair-left" />
                <div className="crosshair-right" />
            </div>
        </Html>
    );
}

export default Crosshair;
