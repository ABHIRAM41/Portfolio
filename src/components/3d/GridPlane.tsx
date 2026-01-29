'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function GridPlane() {
    const gridRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (gridRef.current) {
            // Slowly move the grid
            gridRef.current.position.z = (state.clock.elapsedTime % 10) - 5;
        }
    });

    return (
        <mesh ref={gridRef} rotation={[-Math.PI / 2.2, 0, 0]} position={[0, -4, 0]}>
            <planeGeometry args={[50, 50, 50, 50]} />
            <meshBasicMaterial
                color="#a855f7"
                wireframe
                transparent
                opacity={0.08}
            />
        </mesh>
    );
}
