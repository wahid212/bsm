import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/bsm/',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Hapus 'lottie': ['lottie-web'] karena sudah tidak pakai
          'vendor': ['react', 'react-dom'],
          'lottie': ['lottie-react'], // Tambah ini
        }
      }
    }
  }
})