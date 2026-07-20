import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // SWC compiler — 20x faster than Babel, enables fast HMR
    react(),
  ],

  resolve: {
    alias: {
      // Clean absolute imports: import X from '@/components/...'
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    // Target modern browsers for smaller output
    target: 'es2020',

    // Compress output
    minify: 'esbuild',

    // Inline small assets as base64 (< 4KB) to save HTTP requests
    assetsInlineLimit: 4096,

    // Source maps only for development
    sourcemap: false,

    // Chunk splitting strategy — splits vendor from app code
    // so users can cache React separately from your portfolio logic
    rollupOptions: {
      output: {
        manualChunks: {
          // React runtime in its own chunk (rarely changes = long cache)
          'react-vendor': ['react', 'react-dom'],
          // Icons are large — isolate them so they cache independently
          'icons': ['react-icons'],
        },
        // Deterministic chunk names with content hash (cache-busting)
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },

    // Report bundle analysis
    reportCompressedSize: true,
  },

  // Dev server config
  server: {
    port: 5173,
    strictPort: false,
    open: true,        // auto-open browser on `npm run dev`
    cors: true,
  },

  // Preview server (for `npm run preview`)
  preview: {
    port: 4173,
    open: true,
  },

  // Optimize pre-bundled deps to speed up cold starts
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-icons',
      'typewriter-effect',
    ],
  },

  // CSS config — enables CSS modules and minification
  css: {
    devSourcemap: true,
  },
})
