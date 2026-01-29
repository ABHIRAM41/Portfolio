'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const stats = [
    { value: 99.9, suffix: '%', label: 'Uptime' },
    { value: 75, suffix: '%', label: 'Time Saved' },
    { value: 40, suffix: '%', label: 'Velocity ↑' },
    { value: 200, suffix: '+', label: 'Day Streak' },
];

export default function FloatingStats() {
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
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-20 hidden xl:block">
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
                className="space-y-6"
            >
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        className="glass p-4 rounded-xl text-center min-w-[120px]"
                        whileHover={{ scale: 1.05, x: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="text-2xl font-bold text-gradient">
                            {counts[index].toFixed(stat.suffix === '+' ? 0 : 1)}
                            {stat.suffix}
                        </div>
                        <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
