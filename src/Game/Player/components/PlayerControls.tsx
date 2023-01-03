import { useSphere } from '@react-three/cannon';
import { SphereGeometryProps } from '@react-three/fiber';
import { Mesh, Object3D, Sphere, SphereGeometry } from 'three';

function PlayerControls(): JSX.Element {
    const [playerBoundingboxRef] = useSphere<Mesh>(() => ({
        mass: 1,
        args: [0.5],
        position: [-2, 1, 0],
    }));
    return (
        <mesh ref={playerBoundingboxRef}>
            <sphereGeometry args={[0.5]} attach="geometry" />
            <meshBasicMaterial attach="material" />
        </mesh>
    );
}

export default PlayerControls;
