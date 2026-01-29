import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "J Abhiram Reddy | Software Developer",
    description: "Full-Stack Software Developer specializing in React, Next.js, Node.js, and AWS. Founding team member at Vectorsoft with expertise in system architecture and cloud infrastructure.",
    keywords: ["Software Developer", "Full-Stack Engineer", "React", "Next.js", "AWS", "Node.js", "TypeScript"],
    authors: [{ name: "J Abhiram Reddy" }],
    openGraph: {
        title: "J Abhiram Reddy | Software Developer",
        description: "Full-Stack Software Developer specializing in React, Next.js, Node.js, and AWS",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
