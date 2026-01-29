'use client';

import { motion } from 'framer-motion';

export default function SpotlightEffect() {
    return (
        <div className="fixed inset-0 pointer-events-none -z-10">
            {/* Moving spotlight that follows user scroll */}
            <motion.div
                className="absolute w-[800px] h-[800px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                }}
                animate={{
                    x: ['-20%', '120%'],
                    y: ['-20%', '120%'],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                }}
            />

            {/* Secondary spotlight */}
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                }}
                animate={{
                    x: ['120%', '-20%'],
                    y: ['120%', '-20%'],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                }}
            />
        </div>
    );
}
