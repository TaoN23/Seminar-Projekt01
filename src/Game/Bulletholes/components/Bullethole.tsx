import * as THREE from 'three';
import { dispose, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
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
        if (hits.length > 0) {
            const position = hits[0].point.clone();
            const eye = camera.position.clone();
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            eye.add(hits[0].face!.normal);
            const rotation = new THREE.Matrix4();
            rotation.lookAt(eye, position, THREE.Object3D.DefaultUp);
            const orientation = new THREE.Euler(
                Math.random(),
                Math.random(),
                Math.random()
            );
            // orientation.setFromRotationMatrix(rotation);
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
    }, [camera, scene]);

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <></>;
}

export default Bullethole;
