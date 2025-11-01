import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// 🧠 Configuración optimizada para producción y rendimiento
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  // ⚙️ Opciones de compilación y cacheo
  build: {
    target: 'esnext', // genera JS moderno y más liviano
    cssMinify: true,
    minify: 'terser', // mejor compresión que esbuild
    sourcemap: false,
    chunkSizeWarningLimit: 600, // evita warnings falsos
    rollupOptions: {
      output: {
        manualChunks: {
          // 🧩 Divide dependencias grandes en chunks separados
          react: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@mui/material', '@mui/icons-material'],
        },
      },
    },
  },

  // 🚀 Optimización en desarrollo
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },

  // 🌐 Recomendado para hosting tipo Netlify/Vercel
  server: {
    port: 5173,
    open: true,
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
})