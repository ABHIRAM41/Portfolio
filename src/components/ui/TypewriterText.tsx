'use client';

import { useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

interface TypewriterTextProps {
    texts: string[];
    className?: string;
}

export default function TypewriterText({ texts, className = '' }: TypewriterTextProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[currentIndex];
        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    if (displayedText.length < currentText.length) {
                        setDisplayedText(currentText.slice(0, displayedText.length + 1));
                    } else {
                        setTimeout(() => setIsDeleting(true), 2000);
                    }
                } else {
                    if (displayedText.length > 0) {
                        setDisplayedText(currentText.slice(0, displayedText.length - 1));
                    } else {
                        setIsDeleting(false);
                        setCurrentIndex((currentIndex + 1) % texts.length);
                    }
                }
            },
            isDeleting ? 50 : 100
        );

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, currentIndex, texts]);

    return (
        <span className={className}>
            {displayedText}
            <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-accent-purple"
            >
                |
            </motion.span>
        </span>
    );
}
