'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ParticleField() {
    const pointsRef = useRef<THREE.Points>(null);
    const particleCount = 5000; // Increased for denser, more impressive effect

    const [positions, colors] = useMemo(() => {
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;

            // Random positions in a sphere
            positions[i3] = (Math.random() - 0.5) * 20;
            positions[i3 + 1] = (Math.random() - 0.5) * 20;
            positions[i3 + 2] = (Math.random() - 0.5) * 10;

            // Random colors (purples, cyans, pinks)
            const colorChoice = Math.random();
            if (colorChoice < 0.33) {
                colors[i3] = 0.66; colors[i3 + 1] = 0.33; colors[i3 + 2] = 0.97; // Purple
            } else if (colorChoice < 0.66) {
                colors[i3] = 0.02; colors[i3 + 1] = 0.71; colors[i3 + 2] = 0.83; // Cyan
            } else {
                colors[i3] = 0.93; colors[i3 + 1] = 0.28; colors[i3 + 2] = 0.60; // Pink
            }
        }

        return [positions, colors];
    }, [particleCount]);

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y += 0.0005;
            pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particleCount}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={particleCount}
                    array={colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                vertexColors
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
}
