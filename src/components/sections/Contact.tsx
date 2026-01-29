'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/data/resume';
import { fadeIn, staggerContainer } from '@/utils/animations';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Create mailto link
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(`From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="relative py-20 px-6">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-4xl mx-auto"
            >
                <motion.h2
                    variants={fadeIn}
                    className="text-4xl md:text-5xl font-bold text-center mb-8 text-gradient"
                >
                    Get In Touch
                </motion.h2>

                <motion.p
                    variants={fadeIn}
                    className="text-center text-gray-300 mb-12 max-w-2xl mx-auto"
                >
                    I'm always open to new opportunities, collaborations, or just a friendly chat.
                    Feel free to reach out!
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <motion.div variants={fadeIn} className="space-y-6">
                        <div className="glass p-6 rounded-xl">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-accent-purple/20 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Email</p>
                                    <a href={`mailto:${personalInfo.email}`} className="text-white hover:text-accent-purple transition-colors">
                                        {personalInfo.email}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="glass p-6 rounded-xl">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-accent-cyan/20 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Phone</p>
                                    <p className="text-white">{personalInfo.phone}</p>
                                </div>
                            </div>
                        </div>

                        <div className="glass p-6 rounded-xl">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-accent-pink/20 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-accent-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Location</p>
                                    <p className="text-white">{personalInfo.location}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div variants={fadeIn}>
                        <form onSubmit={handleSubmit} className="glass p-8 rounded-xl space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent-purple transition-colors text-white"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent-purple transition-colors text-white"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent-purple transition-colors text-white resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full px-8 py-3 bg-gradient-to-r from-accent-purple to-accent-pink rounded-lg text-white font-medium hover:shadow-lg hover:shadow-accent-purple/50 transition-all duration-300 transform hover:scale-105"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
