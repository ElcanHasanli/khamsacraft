import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // allow LAN access
    port: 5173,
    strictPort: false,
    hmr: {
      host: '192.168.100.241', // your LAN IP for WS
      protocol: 'ws',
      clientPort: 5173,
      port: 5173,
    },
    cors: true,
  },
  base: './',
})
