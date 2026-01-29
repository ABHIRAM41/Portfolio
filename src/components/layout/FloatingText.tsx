'use client';

import { motion } from 'framer-motion';

const floatingWords = [
    { text: 'React', x: '10%', y: '20%', delay: 0 },
    { text: 'Next.js', x: '80%', y: '15%', delay: 0.5 },
    { text: 'TypeScript', x: '15%', y: '70%', delay: 1 },
    { text: 'AWS', x: '85%', y: '75%', delay: 1.5 },
    { text: 'Node.js', x: '50%', y: '85%', delay: 2 },
    { text: 'MongoDB', x: '90%', y: '45%', delay: 2.5 },
];

export default function FloatingText() {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
            {floatingWords.map((word, index) => (
                <motion.div
                    key={index}
                    className="absolute text-6xl md:text-8xl font-bold text-white/[0.02] select-none"
                    style={{
                        left: word.x,
                        top: word.y,
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                        opacity: [0.02, 0.04, 0.02],
                        scale: [1, 1.1, 1],
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        delay: word.delay,
                        ease: 'easeInOut',
                    }}
                >
                    {word.text}
                </motion.div>
            ))}
        </div>
    );
}
