'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export default function Reveal({ children, className = '', delay = 0 }: RevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView, controls]);

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.8,
                        delay: delay,
                        ease: [0.6, -0.05, 0.01, 0.99]
                    }
                }
            }}
        >
            {children}
        </motion.div>
    );
}
