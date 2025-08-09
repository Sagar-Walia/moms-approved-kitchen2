// web/vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';
import copy from 'vite-plugin-copy';

export default defineConfig({
  // Set base path to root for proper asset loading
  base: '/',
  
  // Configure build settings
  build: {
    // Output directory that matches Cloudflare Pages settings
    outDir: 'build/client',
    
    // Generate sourcemaps for debugging (optional)
    sourcemap: true,
    
    // Rollup configuration for proper entry handling
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  },
  
  // Set public directory where assets should be served from
  publicDir: 'public',
  
  // Add plugins
  plugins: [
    // Copy plugin ensures index.html is included in build
    copy({
      targets: [
        { 
          src: 'public/index.html', 
          dest: 'build/client' 
        },
        // Copy all public assets
        { 
          src: 'public/**/*', 
          dest: 'build/client' 
        }
      ],
      hook: 'buildEnd' // Copy after build completes
    })
  ],
  
  // Server configuration for development
  server: {
    port: 3000,
    open: true
  },
  
  // Resolve aliases for cleaner imports
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
});
