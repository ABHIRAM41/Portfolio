'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { Mesh } from 'three';

export default function InteractiveOrb() {
    const orbRef = useRef<Mesh>(null);
    const mouseX = useRef(0);
    const mouseY = useRef(0);

    useFrame((state) => {
        if (orbRef.current) {
            // Smooth rotation
            orbRef.current.rotation.x = state.clock.elapsedTime * 0.2;
            orbRef.current.rotation.y = state.clock.elapsedTime * 0.3;

            // Follow mouse with smooth lerp
            const targetX = (mouseX.current * 2 - 1) * 2;
            const targetY = -(mouseY.current * 2 - 1) * 2;

            orbRef.current.position.x += (targetX - orbRef.current.position.x) * 0.05;
            orbRef.current.position.y += (targetY - orbRef.current.position.y) * 0.05;

            // Pulsing effect
            const scale = 1 + Math.sin(state.clock.elapsedTime) * 0.1;
            orbRef.current.scale.setScalar(scale);
        }
    });

    // Track mouse position
    if (typeof window !== 'undefined') {
        window.addEventListener('mousemove', (e) => {
            mouseX.current = e.clientX / window.innerWidth;
            mouseY.current = e.clientY / window.innerHeight;
        });
    }

    return (
        <Sphere ref={orbRef} args={[1.5, 64, 64]} position={[0, 0, 0]}>
            <meshStandardMaterial
                color="#a855f7"
                emissive="#a855f7"
                emissiveIntensity={0.5}
                roughness={0.2}
                metalness={0.8}
                wireframe={false}
            />
        </Sphere>
    );
}
