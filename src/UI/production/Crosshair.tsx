import './style/crosshair.css';

function Crosshair(): JSX.Element {
    return (
        <div className="crosshair">
            <div className="crosshair-top" />
            <div className="crosshair-bottom" />
            <div className="crosshair-left" />
            <div className="crosshair-right" />
        </div>
    );
}

export default Crosshair;
