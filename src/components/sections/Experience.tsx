'use client';

import { motion } from 'framer-motion';
import { experience } from '@/data/resume';
import { fadeIn, staggerContainer } from '@/utils/animations';

export default function Experience() {
    return (
        <section id="experience" className="relative py-20 px-6">
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
                    Experience
                </motion.h2>

                <div className="relative">
                    {/* Timeline line - FIXED: Added z-0 to keep behind content */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-purple via-accent-cyan to-accent-pink z-0" />

                    {experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn}
                            className={`relative mb-16 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                                }`}
                        >
                            {/* Timeline dot - z-10 to appear above line */}
                            <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent-purple rounded-full transform -translate-x-1/2 border-4 border-[#0a0a0a] glow-effect z-10" />

                            {/* Content card - relative and z-10 to appear above line */}
                            <div className="relative ml-16 md:ml-0 md:mr-16 glass p-6 md:p-8 rounded-xl hover:bg-white/10 transition-all duration-300 z-10">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">{exp.role}</h3>
                                    <span className="text-accent-cyan text-sm font-medium">
                                        {exp.startDate} - {exp.endDate}
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 mb-4">
                                    <h4 className="text-lg text-accent-purple font-semibold">{exp.company}</h4>
                                    <span className="text-gray-500">•</span>
                                    <span className="text-gray-400">{exp.location}</span>
                                </div>

                                <ul className="space-y-3">
                                    {exp.highlights.slice(0, 5).map((highlight, hIndex) => (
                                        <li key={hIndex} className="text-gray-300 flex items-start gap-3">
                                            <span className="text-accent-purple mt-1">▸</span>
                                            <span className="text-sm leading-relaxed">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>

                                {exp.highlights.length > 5 && (
                                    <button className="mt-4 text-accent-cyan text-sm hover:underline">
                                        + {exp.highlights.length - 5} more achievements
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
