'use client';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative py-8 glass mt-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-400 text-sm">
                        © {currentYear} J Abhiram Reddy. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <a
                            href="https://github.com/ABHIRAM41"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-accent-purple transition-colors duration-300"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/j-abhiram-reddy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-accent-purple transition-colors duration-300"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://leetcode.com/J_Abhiram_reddy/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-accent-purple transition-colors duration-300"
                        >
                            LeetCode
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
