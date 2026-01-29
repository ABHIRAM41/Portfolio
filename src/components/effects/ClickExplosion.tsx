'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
    id: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    color: string;
}

export default function ClickExplosion() {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const colors = ['#a855f7', '#06b6d4', '#ec4899', '#f97316'];
            const newParticles: Particle[] = [];

            for (let i = 0; i < 15; i++) {
                newParticles.push({
                    id: Date.now() + i,
                    x: e.clientX,
                    y: e.clientY,
                    vx: (Math.random() - 0.5) * 8,
                    vy: (Math.random() - 0.5) * 8 - 2,
                    life: 1,
                    color: colors[Math.floor(Math.random() * colors.length)],
                });
            }

            setParticles(prev => [...prev, ...newParticles]);
        };

        window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setParticles(prev =>
                prev
                    .map(p => ({
                        ...p,
                        x: p.x + p.vx,
                        y: p.y + p.vy,
                        vy: p.vy + 0.3, // gravity
                        life: p.life - 0.02,
                    }))
                    .filter(p => p.life > 0)
            );
        }, 1000 / 60);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-50">
            {particles.map(particle => (
                <motion.div
                    key={particle.id}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                        left: particle.x,
                        top: particle.y,
                        backgroundColor: particle.color,
                        opacity: particle.life,
                    }}
                    initial={{ scale: 1 }}
                    animate={{ scale: 0 }}
                    transition={{ duration: 1 }}
                />
            ))}
        </div>
    );
}
