import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 3,
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        reduce_vars: true,
        collapse_vars: true,
        dead_code: true,
        unused: true,
      },
      mangle: {
        safari10: true,
        toplevel: true,
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
        },
        chunkFileNames: 'js/[hash:8].js',
        entryFileNames: 'js/[hash:8].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|webp/i.test(ext)) {
            return `img/[hash:8][extname]`;
          }
          if (/css/i.test(ext)) {
            return `css/[hash:8][extname]`;
          }
          return `[hash:8][extname]`;
        },
      },
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false,
      },
    },
    chunkSizeWarningLimit: 300,
    cssCodeSplit: true,
    target: 'es2020',
    sourcemap: false,
    reportCompressedSize: false,
    cssMinify: true,
  },
  css: {
    devSourcemap: false,
  },
  esbuild: {
    drop: ['console', 'debugger'],
    legalComments: 'none',
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
  },
});