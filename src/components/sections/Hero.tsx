'use client';

import { motion } from 'framer-motion';
import AnimatedBackground from '@/components/layout/AnimatedBackground';
import TypewriterText from '@/components/ui/TypewriterText';
import { personalInfo } from '@/data/resume';
import { fadeIn, staggerContainer } from '@/utils/animations';

export default function Hero() {
    const scrollToSection = (href: string) => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated CSS Background Layer with Integrated Stats */}
            <AnimatedBackground />

            {/* Content */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="relative z-10 max-w-5xl mx-auto px-6 text-center"
            >
                <motion.div variants={fadeIn} className="mb-6">
                    <span className="text-accent-cyan text-lg font-medium">Hello, I'm</span>
                </motion.div>

                <motion.h1
                    variants={fadeIn}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gradient relative"
                >
                    {personalInfo.name}
                    {/* Glow effect behind text */}
                    <span className="absolute inset-0 blur-2xl opacity-50 text-gradient -z-10">
                        {personalInfo.name}
                    </span>
                </motion.h1>

                {/* Typewriter Animation */}
                <motion.p
                    variants={fadeIn}
                    className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 font-light min-h-[40px]"
                >
                    <TypewriterText
                        texts={[
                            'Software Developer | Full-Stack Engineer',
                            'Cloud Architecture Specialist',
                            'System Design Expert',
                            'Founding Team Member @ Vectorsoft',
                        ]}
                    />
                </motion.p>

                <motion.p
                    variants={fadeIn}
                    className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
                >
                    Founding Team Software Developer specializing in full-stack development,
                    cloud architecture, and scalable systems. Passionate about building
                    innovative solutions that make a difference.
                </motion.p>

                <motion.div
                    variants={fadeIn}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <motion.button
                        onClick={() => scrollToSection('#contact')}
                        className="group relative px-8 py-3 bg-gradient-to-r from-accent-purple to-accent-pink rounded-full text-white font-medium overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10">Get In Touch</span>
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-accent-pink to-accent-purple"
                            initial={{ x: '100%' }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.button>
                    <motion.button
                        onClick={() => scrollToSection('#projects')}
                        className="px-8 py-3 glass rounded-full text-white font-medium hover:bg-white/10 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View Projects
                    </motion.button>
                </motion.div>

                <motion.div
                    variants={fadeIn}
                    className="mt-16 flex items-center justify-center gap-6"
                >
                    <motion.a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-accent-purple transition-colors duration-300"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </motion.a>
                    <motion.a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-accent-cyan transition-colors duration-300"
                        whileHover={{ scale: 1.2, rotate: -5 }}
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </motion.a>
                    <motion.a
                        href={personalInfo.leetcode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-accent-orange transition-colors duration-300"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-2.365-1.914-5.756-1.649-7.896.632L5.654 8.116 10.490 2.813a1.374 1.374 0 0 0-.007-1.946 1.384 1.384 0 0 0-1.943.007z" />
                        </svg>
                    </motion.a>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1 h-2 bg-white rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
