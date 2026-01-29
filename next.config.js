/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        // Handle GLSL shaders for Three.js
        config.module.rules.push({
            test: /\.(glsl|vs|fs|vert|frag)$/,
            use: ['raw-loader'],
        });
        return config;
    },
    // Optimize for production
    swcMinify: true,
    // Enable image optimization
    images: {
        domains: [],
    },
};

module.exports = nextConfig;
