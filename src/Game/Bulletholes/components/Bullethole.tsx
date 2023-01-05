import * as THREE from 'three';
import { dispose, useThree } from '@react-three/fiber';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { Decal } from '@react-three/drei';
import { BufferGeometry, Euler, Mesh, Object3D, Vector3 } from 'three';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { DecalGeometry } from '../../../../public/decals.js';

function newDecalGeometry(
    object: Object3D,
    position: Vector3,
    orientation: Euler,
    size: Vector3
): BufferGeometry {
    return new DecalGeometry(object, position, orientation, size);
}

function Bullethole(): JSX.Element {
    const { camera, scene } = useThree();
    const decalRef = useRef<Mesh>();
    useEffect(() => {
        const raycaster = new THREE.Raycaster();
        const screenmid = {
            x: 0,
            y: 0,
        };
        raycaster.setFromCamera(screenmid, camera);
        const hits = raycaster.intersectObjects(scene.children);
        console.log(hits);
        if (hits.length > 0) {
            const position = hits[0].point.clone();
            const eye = camera.position.clone();
            eye.add(hits[0].face!.normal);
            const rotation = new THREE.Matrix4();
            rotation.lookAt(eye, position, THREE.Object3D.DefaultUp);
            const orientation = new THREE.Euler();
            orientation.setFromRotationMatrix(rotation);
            const decalgeometry = newDecalGeometry(
                hits[0].object,
                hits[0].point,
                orientation,
                new THREE.Vector3(0.02, 0.02, 0.02)
            );

            const decalMaterial = new THREE.MeshStandardMaterial({
                color: 'black',
                polygonOffset: true,
                polygonOffsetFactor: -4,
            });

            const decal = new THREE.Mesh(decalgeometry, decalMaterial);
            decalRef.current = decal;
            scene.add(decal);
        }
        return () => {
            dispose(decalRef);
        };
    }, []);

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <></>;
}

export default Bullethole;
