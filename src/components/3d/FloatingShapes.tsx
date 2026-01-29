'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { RoundedBox } from '@react-three/drei';

export default function FloatingShapes() {
    return (
        <group>
            <FloatingCube position={[-3, 2, -2]} />
            <FloatingSphere position={[3, -1, -3]} />
            <FloatingTorus position={[2, 3, -4]} />
            <FloatingOctahedron position={[-2, -2, -2]} />
        </group>
    );
}

function FloatingCube({ position }: { position: [number, number, number] }) {
    const meshRef = useRef<Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
            meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.3;
        }
    });

    return (
        <RoundedBox ref={meshRef} args={[1, 1, 1]} position={position} radius={0.05}>
            <meshStandardMaterial
                color="#a855f7"
                emissive="#a855f7"
                emissiveIntensity={0.5}
                wireframe
            />
        </RoundedBox>
    );
}

function FloatingSphere({ position }: { position: [number, number, number] }) {
    const meshRef = useRef<Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.005;
            meshRef.current.rotation.z += 0.005;
            meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 0.8) * 0.4;
        }
    });

    return (
        <mesh ref={meshRef} position={position}>
            <sphereGeometry args={[0.8, 32, 32]} />
            <meshStandardMaterial
                color="#06b6d4"
                emissive="#06b6d4"
                emissiveIntensity={0.3}
                wireframe
            />
        </mesh>
    );
}

function FloatingTorus({ position }: { position: [number, number, number] }) {
    const meshRef = useRef<Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.02;
            meshRef.current.rotation.y += 0.015;
            meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.2) * 0.2;
        }
    });

    return (
        <mesh ref={meshRef} position={position}>
            <torusGeometry args={[0.6, 0.2, 16, 100]} />
            <meshStandardMaterial
                color="#ec4899"
                emissive="#ec4899"
                emissiveIntensity={0.4}
                wireframe
            />
        </mesh>
    );
}

function FloatingOctahedron({ position }: { position: [number, number, number] }) {
    const meshRef = useRef<Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.02;
            meshRef.current.rotation.z += 0.01;
            meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.5) * 0.25;
        }
    });

    return (
        <mesh ref={meshRef} position={position}>
            <octahedronGeometry args={[0.7]} />
            <meshStandardMaterial
                color="#f97316"
                emissive="#f97316"
                emissiveIntensity={0.3}
                wireframe
            />
        </mesh>
    );
}
