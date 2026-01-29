'use client';

import { useEffect, useState } from 'react';

class SoundManager {
    private sounds: { [key: string]: HTMLAudioElement } = {};
    private enabled = false;

    init() {
        // Create simple beep sounds using Web Audio API
        this.enabled = true;
    }

    play(type: 'hover' | 'click' | 'success' | 'whoosh') {
        if (!this.enabled) return;

        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        switch (type) {
            case 'hover':
                oscillator.frequency.value = 400;
                gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.1);
                break;
            case 'click':
                oscillator.frequency.value = 600;
                gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.2);
                break;
            case 'success':
                oscillator.frequency.value = 800;
                gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.3);
                break;
            case 'whoosh':
                oscillator.frequency.value = 200;
                gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.15);
                break;
        }
    }
}

export const soundManager = new SoundManager();

export default function SoundEffects() {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        // Auto-enable after first user interaction
        const enableSound = () => {
            if (!enabled) {
                soundManager.init();
                setEnabled(true);
            }
        };

        document.addEventListener('click', enableSound, { once: true });
        return () => document.removeEventListener('click', enableSound);
    }, [enabled]);

    useEffect(() => {
        if (!enabled) return;

        // Add hover sounds to buttons
        const buttons = document.querySelectorAll('button, a');

        const handleMouseEnter = () => soundManager.play('hover');
        const handleClick = () => soundManager.play('click');

        buttons.forEach(button => {
            button.addEventListener('mouseenter', handleMouseEnter);
            button.addEventListener('click', handleClick);
        });

        return () => {
            buttons.forEach(button => {
                button.removeEventListener('mouseenter', handleMouseEnter);
                button.removeEventListener('click', handleClick);
            });
        };
    }, [enabled]);

    return null;
}
