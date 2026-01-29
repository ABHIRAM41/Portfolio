'use client';

import { useRef, useState } from 'react';
import { useFrame, ThreeEvent } from '@react-three/fiber';
import { Mesh } from 'three';

interface DraggableOrbProps {
    position: [number, number, number];
    color: string;
}

export default function DraggableOrb({ position, color }: DraggableOrbProps) {
    const meshRef = useRef<Mesh>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState([0, 0, 0]);

    useFrame((state) => {
        if (meshRef.current && !isDragging) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;

            // Gentle floating
            meshRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.001;
        }
    });

    const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
        e.stopPropagation();
        setIsDragging(true);

        if (meshRef.current) {
            const offset = [
                e.point.x - meshRef.current.position.x,
                e.point.y - meshRef.current.position.y,
                e.point.z - meshRef.current.position.z,
            ];
            setDragOffset(offset);
        }
    };

    const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
        if (isDragging && meshRef.current) {
            meshRef.current.position.x = e.point.x - dragOffset[0];
            meshRef.current.position.y = e.point.y - dragOffset[1];
        }
    };

    const handlePointerUp = () => {
        setIsDragging(false);
    };

    return (
        <mesh
            ref={meshRef}
            position={position}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
        >
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={isDragging ? 1 : 0.5}
                roughness={0.2}
                metalness={0.8}
            />
        </mesh>
    );
}
