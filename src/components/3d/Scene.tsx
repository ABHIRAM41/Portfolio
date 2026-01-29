'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { ReactNode, Suspense } from 'react';
import CameraControls from './CameraControls';
import DraggableOrb from './DraggableOrb';

interface SceneProps {
    children: ReactNode;
    cameraPosition?: [number, number, number];
    enableControls?: boolean;
}

export default function Scene({ children, cameraPosition = [0, 0, 5], enableControls = false }: SceneProps) {
    return (
        <div className="fixed inset-0 -z-10">
            <Canvas
                className="w-full h-full"
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]}
            >
                <PerspectiveCamera makeDefault position={cameraPosition} />

                {/* Keyboard Camera Controls */}
                <CameraControls />

                {/* Lighting */}
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
                <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={0.5} color="#06b6d4" />

                {/* Draggable Orbs */}
                <DraggableOrb position={[3, 2, -2]} color="#a855f7" />
                <DraggableOrb position={[-3, -2, -3]} color="#06b6d4" />
                <DraggableOrb position={[2, -3, -4]} color="#ec4899" />

                {/* Content */}
                <Suspense fallback={null}>
                    {children}
                </Suspense>

                {/* Optional controls for debugging */}
                {enableControls && <OrbitControls enableZoom={false} enablePan={false} />}
            </Canvas>
        </div>
    );
}
