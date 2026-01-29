'use client';

import { useEffect, useRef } from 'react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let currentScroll = 0;
        let targetScroll = 0;
        let ease = 0.05;

        const smoothScrolling = () => {
            targetScroll = window.scrollY;
            currentScroll += (targetScroll - currentScroll) * ease;

            if (scrollRef.current) {
                scrollRef.current.style.transform = `translateY(-${currentScroll}px)`;
            }

            requestAnimationFrame(smoothScrolling);
        };

        const raf = requestAnimationFrame(smoothScrolling);

        return () => {
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden">
            <div ref={scrollRef} className="will-change-transform">
                {children}
            </div>
        </div>
    );
}
