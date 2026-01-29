'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/resume';
import { fadeIn, staggerContainer, scaleIn } from '@/utils/animations';

export default function Skills() {
    return (
        <section id="skills" className="relative py-20 px-6">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="max-w-6xl mx-auto"
            >
                <motion.h2
                    variants={fadeIn}
                    className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
                >
                    Skills & Technologies
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skillCategory, index) => (
                        <motion.div
                            key={index}
                            variants={scaleIn}
                            className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                        >
                            <h3 className="text-xl font-bold text-accent-purple mb-4 group-hover:text-accent-cyan transition-colors duration-300">
                                {skillCategory.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skillCategory.items.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-accent-purple/20 hover:border-accent-purple/50 transition-all duration-300 cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Skill Stats */}
                <motion.div
                    variants={fadeIn}
                    className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
                >
                    <div className="glass p-6 rounded-xl text-center">
                        <div className="text-4xl font-bold text-gradient mb-2">6+</div>
                        <div className="text-gray-400">Languages</div>
                    </div>
                    <div className="glass p-6 rounded-xl text-center">
                        <div className="text-4xl font-bold text-gradient mb-2">15+</div>
                        <div className="text-gray-400">Technologies</div>
                    </div>
                    <div className="glass p-6 rounded-xl text-center">
                        <div className="text-4xl font-bold text-gradient mb-2">10+</div>
                        <div className="text-gray-400">Tools</div>
                    </div>
                    <div className="glass p-6 rounded-xl text-center">
                        <div className="text-4xl font-bold text-gradient mb-2">200+</div>
                        <div className="text-gray-400">Problems Solved</div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
