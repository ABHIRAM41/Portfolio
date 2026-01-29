'use client';

import { useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';

export default function CameraControls() {
    const { camera } = useThree();
    const keys = {
        w: false,
        a: false,
        s: false,
        d: false,
        ArrowUp: false,
        ArrowDown: false,
        ArrowLeft: false,
        ArrowRight: false,
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key in keys) {
                keys[e.key as keyof typeof keys] = true;
            }
        };

        const handleKeyUp = (e: KeyboardEvent) => {
            if (e.key in keys) {
                keys[e.key as keyof typeof keys] = false;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    useFrame(() => {
        const speed = 0.1;
        const direction = new Vector3();

        if (keys.w || keys.ArrowUp) direction.z -= speed;
        if (keys.s || keys.ArrowDown) direction.z += speed;
        if (keys.a || keys.ArrowLeft) direction.x -= speed;
        if (keys.d || keys.ArrowRight) direction.x += speed;

        camera.position.add(direction);
    });

    return null;
}
