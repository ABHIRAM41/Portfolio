'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundManager } from '@/components/effects/SoundEffects';

const codingChallenges = [
    {
        question: "What's the output? console.log(typeof typeof 1)",
        options: ["number", "string", "undefined", "object"],
        correct: 1,
        explanation: "typeof 1 returns 'number', typeof 'number' returns 'string'"
    },
    {
        question: "What does [1, 2, 3].map(num => num * 2) return?",
        options: ["[1, 2, 3]", "[2, 4, 6]", "[3, 6, 9]", "6"],
        correct: 1,
        explanation: "map() creates a new array with each element multiplied by 2"
    },
    {
        question: "What's the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
        correct: 1,
        explanation: "Binary search divides the search space in half each time"
    },
];

export default function CodingGame() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [answered, setAnswered] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            // Press 'G' to open game
            if (e.key.toLowerCase() === 'g' && e.ctrlKey) {
                e.preventDefault();
                setIsOpen(true);
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, []);

    const handleAnswer = (index: number) => {
        if (answered) return;

        setSelectedAnswer(index);
        setAnswered(true);

        if (index === codingChallenges[currentQuestion].correct) {
            setScore(score + 1);
            soundManager.play('success');
        } else {
            soundManager.play('click');
        }

        setTimeout(() => {
            if (currentQuestion < codingChallenges.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setAnswered(false);
                setSelectedAnswer(null);
            } else {
                // Game over
                setTimeout(() => {
                    setIsOpen(false);
                    setCurrentQuestion(0);
                    setScore(0);
                    setAnswered(false);
                    setSelectedAnswer(null);
                }, 2000);
            }
        }, 2000);
    };

    const challenge = codingChallenges[currentQuestion];

    return (
        <>
            {/* Easter Egg Trigger */}
            <div className="fixed bottom-4 left-4 z-50">
                <motion.button
                    onClick={() => setIsOpen(true)}
                    className="glass px-4 py-2 rounded-full text-sm text-white hover:bg-white/10 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    🎮 Play Game (Ctrl+G)
                </motion.button>
            </div>

            {/* Game Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.8, y: 50 }}
                            onClick={(e) => e.stopPropagation()}
                            className="glass p-8 rounded-2xl max-w-2xl w-full mx-4"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-gradient">Coding Challenge</h2>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm text-gray-400">
                                        {currentQuestion + 1} / {codingChallenges.length}
                                    </span>
                                    <span className="text-sm font-bold text-accent-purple">
                                        Score: {score}
                                    </span>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="text-gray-400 hover:text-white"
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-xl text-white mb-6">{challenge.question}</h3>

                                <div className="space-y-3">
                                    {challenge.options.map((option, index) => (
                                        <motion.button
                                            key={index}
                                            onClick={() => handleAnswer(index)}
                                            disabled={answered}
                                            className={`w-full text-left px-6 py-4 rounded-xl transition-all ${answered
                                                    ? index === challenge.correct
                                                        ? 'bg-green-500/20 border-2 border-green-500'
                                                        : index === selectedAnswer
                                                            ? 'bg-red-500/20 border-2 border-red-500'
                                                            : 'bg-white/5 border border-white/10'
                                                    : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent-purple'
                                                }`}
                                            whileHover={!answered ? { scale: 1.02, x: 10 } : {}}
                                            whileTap={!answered ? { scale: 0.98 } : {}}
                                        >
                                            <span className="text-white">{option}</span>
                                        </motion.button>
                                    ))}
                                </div>

                                {answered && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-4 p-4 bg-white/5 rounded-xl border border-white/10"
                                    >
                                        <p className="text-sm text-gray-300">{challenge.explanation}</p>
                                    </motion.div>
                                )}
                            </div>

                            {currentQuestion === codingChallenges.length - 1 && answered && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-center"
                                >
                                    <p className="text-2xl font-bold text-gradient">
                                        Game Complete! Final Score: {score}/{codingChallenges.length}
                                    </p>
                                </motion.div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
