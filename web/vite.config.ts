import { defineConfig } from 'vite';
import { resolve } from 'path';
import copy from 'vite-plugin-copy';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'build/client',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  },
  publicDir: 'public',
  plugins: [
    copy({
      targets: [
        { 
          src: 'public/index.html', 
          dest: 'build/client' 
        },
        { 
          src: 'public/**/*', 
          dest: 'build/client' 
        }
      ],
      hook: 'buildEnd'
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
});
