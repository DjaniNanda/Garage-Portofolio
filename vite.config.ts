import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
<<<<<<< HEAD
    // Enable minification
=======
    // Enable aggressive minification
>>>>>>> cdff7487f3c186a91e6e5314e4bbd9c9d1f32149
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
<<<<<<< HEAD
      },
    },
    // Optimize chunk splitting
=======
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2,
      },
      mangle: {
        safari10: true,
      },
    },
    // Optimize chunk splitting for better caching
>>>>>>> cdff7487f3c186a91e6e5314e4bbd9c9d1f32149
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react'],
        },
<<<<<<< HEAD
      },
    },
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 1000,
    // Enable CSS code splitting
    cssCodeSplit: true,
  },
  // Optimize assets
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.webp'],
=======
        // Reduce chunk names for smaller file sizes
        chunkFileNames: 'js/[hash].js',
        entryFileNames: 'js/[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `img/[hash][extname]`;
          }
          if (/css/i.test(ext)) {
            return `css/[hash][extname]`;
          }
          return `assets/[hash][extname]`;
        },
      },
    },
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 500,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Target modern browsers for smaller output
    target: 'es2020',
    // Reduce sourcemap size
    sourcemap: false,
  },
  // Optimize assets
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.webp'],
  // Enable CSS optimization
  css: {
    devSourcemap: false,
  },
>>>>>>> cdff7487f3c186a91e6e5314e4bbd9c9d1f32149
});