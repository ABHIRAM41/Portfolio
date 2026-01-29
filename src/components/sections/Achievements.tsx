'use client';

import { motion } from 'framer-motion';
import { achievements } from '@/data/resume';
import { fadeIn, staggerContainer, scaleIn } from '@/utils/animations';

export default function Achievements() {
    return (
        <section id="achievements" className="relative py-20 px-6">
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
                    Achievements & Certifications
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            variants={scaleIn}
                            className="glass p-8 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-purple to-accent-pink flex items-center justify-center text-2xl">
                                    {achievement.category === 'Competitive Programming' ? '🏆' : '👨‍💻'}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all duration-300">
                                        {achievement.title}
                                    </h3>
                                    <p className="text-sm text-accent-purple">{achievement.organization}</p>
                                </div>
                            </div>

                            <p className="text-sm text-gray-400 mb-4">{achievement.period}</p>

                            <ul className="space-y-2">
                                {achievement.highlights.map((highlight, hIndex) => (
                                    <li key={hIndex} className="flex items-start gap-2 text-gray-300">
                                        <span className="text-accent-cyan mt-1">✓</span>
                                        <span className="text-sm">{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Competitive Programming Stats */}
                <motion.div
                    variants={fadeIn}
                    className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
                >
                    <div className="glass p-6 rounded-xl text-center group hover:bg-white/10 transition-all duration-300">
                        <div className="text-4xl mb-2">🔥</div>
                        <div className="text-3xl font-bold text-gradient mb-1">200</div>
                        <div className="text-gray-400 text-sm">Day Streak</div>
                    </div>
                    <div className="glass p-6 rounded-xl text-center group hover:bg-white/10 transition-all duration-300">
                        <div className="text-4xl mb-2">⭐</div>
                        <div className="text-3xl font-bold text-gradient mb-1">1554</div>
                        <div className="text-gray-400 text-sm">LeetCode Rating</div>
                    </div>
                    <div className="glass p-6 rounded-xl text-center group hover:bg-white/10 transition-all duration-300">
                        <div className="text-4xl mb-2">🏅</div>
                        <div className="text-3xl font-bold text-gradient mb-1">5★</div>
                        <div className="text-gray-400 text-sm">Java HackerRank</div>
                    </div>
                    <div className="glass p-6 rounded-xl text-center group hover:bg-white/10 transition-all duration-300">
                        <div className="text-4xl mb-2">🥇</div>
                        <div className="text-3xl font-bold text-gradient mb-1">1st</div>
                        <div className="text-gray-400 text-sm">CodeKaze Rank</div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
