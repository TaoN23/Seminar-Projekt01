import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { Decal } from '@react-three/drei';
import { Mesh } from 'three';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { DecalGeometry } from './decals.js';

function Bullethole(): JSX.Element {
    const { camera, scene } = useThree();
    const mesh = useRef<number>(0);

    useEffect(() => {
        setInterval(() => {
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
                const euler = new THREE.Euler();
                euler.setFromRotationMatrix(rotation);
                const decalgeometry = new DecalGeometry(
                    hits[0].object,
                    hits[0].point,
                    euler,
                    new THREE.Vector3(1, 1, 1)
                );

                const decalMaterial = new THREE.MeshStandardMaterial({
                    color: 'black',
                    polygonOffset: true,
                    polygonOffsetFactor: -4,
                });

                const decal = new THREE.Mesh(decalgeometry, decalMaterial);
                scene.add(decal);
            }
        }, 1000);
    }, []);

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <></>;
}

export default Bullethole;
