'use client';

import { useEffect } from 'react';
import LoadingScreen from '@/components/layout/LoadingScreen';
import CustomCursor from '@/components/layout/CustomCursor';
import StarField from '@/components/layout/StarField';
import SpotlightEffect from '@/components/layout/SpotlightEffect';
import FloatingText from '@/components/layout/FloatingText';
import Global3DBackground from '@/components/layout/Global3DBackground';
import ClickExplosion from '@/components/effects/ClickExplosion';
import CodingGame from '@/components/games/CodingGame';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Education from '@/components/sections/Education';
import Achievements from '@/components/sections/Achievements';
import Contact from '@/components/sections/Contact';

export default function Home() {
    useEffect(() => {
        // Hide default cursor on desktop
        const hideDefaultCursor = () => {
            if (window.innerWidth >= 768) {
                document.body.style.cursor = 'none';
            } else {
                document.body.style.cursor = 'auto';
            }
        };

        hideDefaultCursor();
        window.addEventListener('resize', hideDefaultCursor);

        return () => {
            document.body.style.cursor = 'auto';
            window.removeEventListener('resize', hideDefaultCursor);
        };
    }, []);

    return (
        <main className="relative">
            <LoadingScreen />
            <CustomCursor />

            {/* Global 3D Background - Now covers entire page! */}
            <Global3DBackground />

            <StarField />
            <SpotlightEffect />
            <FloatingText />

            {/* Interactive Features */}
            <ClickExplosion />
            <CodingGame />

            <Navigation />
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Education />
            <Achievements />
            <Contact />
            <Footer />
        </main>
    );
}
