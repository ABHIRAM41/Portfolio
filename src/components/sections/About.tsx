'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/utils/animations';

export default function About() {
    return (
        <section id="about" className="relative py-20 px-6">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-4xl mx-auto"
            >
                <motion.h2
                    variants={fadeIn}
                    className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient"
                >
                    About Me
                </motion.h2>

                <motion.div
                    variants={fadeIn}
                    className="glass p-8 md:p-12 rounded-2xl"
                >
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        I'm a <span className="text-accent-purple font-semibold">Full-Stack Software Developer</span> with
                        a passion for creating innovative, scalable solutions. As a founding team member at Vectorsoft,
                        I've had the opportunity to architect and build systems from the ground up, shaping both the
                        technical architecture and product vision.
                    </p>

                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        My expertise spans across <span className="text-accent-cyan font-semibold">modern web technologies</span>,
                        including Next.js, React, Node.js, and cloud infrastructure on AWS. I've successfully designed and
                        implemented microservices-ready architectures, achieving 99.9% uptime and significantly improving
                        development velocity.
                    </p>

                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        What drives me is the challenge of solving complex problems and building systems that make a real
                        impact. From integrating AI-powered document processing to optimizing database queries for high-concurrency
                        workloads, I'm constantly pushing the boundaries of what's possible.
                    </p>

                    <p className="text-gray-300 text-lg leading-relaxed">
                        Beyond coding, I'm an active competitive programmer with a 200-day LeetCode streak, ranked 1st in my
                        college's CodeKaze competition, and a 5-star Java developer on HackerRank. I believe in continuous
                        learning and sharing knowledge with the developer community.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <div className="glass px-6 py-3 rounded-full">
                            <span className="text-accent-purple font-semibold text-xl">40%</span>
                            <span className="text-gray-400 ml-2">Velocity Increase</span>
                        </div>
                        <div className="glass px-6 py-3 rounded-full">
                            <span className="text-accent-cyan font-semibold text-xl">99.9%</span>
                            <span className="text-gray-400 ml-2">Uptime</span>
                        </div>
                        <div className="glass px-6 py-3 rounded-full">
                            <span className="text-accent-pink font-semibold text-xl">75%</span>
                            <span className="text-gray-400 ml-2">Time Reduction</span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
