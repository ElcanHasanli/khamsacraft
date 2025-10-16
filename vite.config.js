import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Bütün network interface-lərə açır (mobil cihazlardan əlçatandır)
    port: 5173,
    strictPort: false,
    hmr: {
      clientPort: 5173, // HMR üçün düzgün port
    }
  },
  base: './', // Relative path istifadə et
})
