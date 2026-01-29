'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function WaveBackground() {
    const meshRef = useRef<THREE.Mesh>(null);
    const geometryRef = useRef<THREE.PlaneGeometry>(null);

    // Create wave grid
    const count = 50;

    useFrame((state) => {
        if (meshRef.current && geometryRef.current) {
            const positions = geometryRef.current.attributes.position;
            const time = state.clock.elapsedTime;

            for (let i = 0; i < positions.count; i++) {
                const x = positions.getX(i);
                const y = positions.getY(i);

                // Create wave pattern
                const wave1 = Math.sin(x * 0.5 + time) * 0.3;
                const wave2 = Math.sin(y * 0.5 + time * 0.8) * 0.2;
                const z = wave1 + wave2;

                positions.setZ(i, z);
            }

            positions.needsUpdate = true;
            geometryRef.current.computeVertexNormals();
        }
    });

    return (
        <mesh ref={meshRef} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -3, -5]}>
            <planeGeometry ref={geometryRef} args={[20, 20, count, count]} />
            <meshStandardMaterial
                color="#a855f7"
                wireframe
                transparent
                opacity={0.15}
                emissive="#a855f7"
                emissiveIntensity={0.2}
            />
        </mesh>
    );
}
