'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function GradientSphere() {
    const sphereRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (sphereRef.current) {
            sphereRef.current.rotation.x = state.clock.elapsedTime * 0.1;
            sphereRef.current.rotation.y = state.clock.elapsedTime * 0.15;
        }
    });

    return (
        <mesh ref={sphereRef} position={[-4, -2, -8]}>
            <sphereGeometry args={[3, 64, 64]} />
            <meshStandardMaterial
                color="#a855f7"
                emissive="#a855f7"
                emissiveIntensity={0.3}
                transparent
                opacity={0.15}
                roughness={0.1}
                metalness={0.9}
            />
        </mesh>
    );
}
