'use client';

import { motion } from 'framer-motion';
import { education } from '@/data/resume';
import { fadeIn, staggerContainer } from '@/utils/animations';

export default function Education() {
    return (
        <section id="education" className="relative py-20 px-6">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-4xl mx-auto"
            >
                <motion.h2
                    variants={fadeIn}
                    className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
                >
                    Education
                </motion.h2>

                <div className="space-y-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn}
                            className="glass p-8 rounded-xl hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">
                                    {edu.institution}
                                </h3>
                                <span className="text-accent-cyan text-sm font-medium">
                                    {edu.startDate} - {edu.endDate}
                                </span>
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                                <p className="text-lg text-accent-purple font-semibold">
                                    {edu.degree}
                                </p>
                                <span className="hidden md:inline text-gray-500">•</span>
                                <p className="text-gray-400">{edu.field}</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-gray-400">{edu.location}</span>
                                <span className="text-gray-500">•</span>
                                <span className="text-accent-cyan font-semibold">{edu.score}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
