'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const stats = [
    { value: 99.9, suffix: '%', label: 'Uptime', x: '15%', y: '25%' },
    { value: 75, suffix: '%', label: 'Time Saved', x: '80%', y: '30%' },
    { value: 40, suffix: '%', label: 'Velocity ↑', x: '20%', y: '70%' },
    { value: 200, suffix: '+', label: 'Day Streak', x: '75%', y: '65%' },
];

export default function AnimatedBackground() {
    const [counts, setCounts] = useState(stats.map(() => 0));

    useEffect(() => {
        stats.forEach((stat, index) => {
            const duration = 2000;
            const steps = 60;
            const increment = stat.value / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= stat.value) {
                    setCounts(prev => {
                        const newCounts = [...prev];
                        newCounts[index] = stat.value;
                        return newCounts;
                    });
                    clearInterval(timer);
                } else {
                    setCounts(prev => {
                        const newCounts = [...prev];
                        newCounts[index] = current;
                        return newCounts;
                    });
                }
            }, duration / steps);

            return () => clearInterval(timer);
        });
    }, []);

    return (
        <div className="fixed inset-0 -z-20 overflow-hidden">
            {/* Radial Gradient Background */}
            <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent" />

            {/* Animated Gradient Orbs */}
            <motion.div
                className="absolute top-20 left-20 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 30, 0],
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute bottom-20 right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/30 blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                    x: [0, -40, 0],
                    y: [0, 40, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-600/20 to-transparent blur-3xl"
                animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Floating Stats - Integrated into Background */}
            {stats.map((stat, index) => (
                <motion.div
                    key={index}
                    className="absolute"
                    style={{
                        left: stat.x,
                        top: stat.y,
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                        opacity: [0.15, 0.25, 0.15],
                        scale: [1, 1.05, 1],
                        y: [0, -10, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.5,
                        ease: "easeInOut",
                    }}
                >
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-white/20">
                            {counts[index].toFixed(stat.suffix === '+' ? 0 : 1)}
                            {stat.suffix}
                        </div>
                        <div className="text-xs text-white/10 mt-1">{stat.label}</div>
                    </div>
                </motion.div>
            ))}

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

            {/* Noise Texture */}
            <div className="absolute inset-0 bg-noise opacity-[0.03]" />

            {/* Vignette */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/60" />
        </div>
    );
}
