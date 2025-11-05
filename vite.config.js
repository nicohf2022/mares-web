import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// 🧱 Configuración optimizada para Vercel y producción
export default defineConfig({
  // 👇 Este valor es CRUCIAL para que las rutas y assets se sirvan correctamente en producción
  base: '/',

  plugins: [
    react(),
    tailwindcss(),
  ],

  // ⚙️ Opciones de compilación y optimización
  build: {
    target: 'esnext',             // genera JS moderno y más liviano
    cssMinify: true,              // minifica el CSS
    minify: 'terser',             // mejor compresión que esbuild
    sourcemap: false,             // no genera mapas de código (reduce peso)
    chunkSizeWarningLimit: 600,   // evita warnings falsos
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

  // 🌐 Configuración del servidor local
  server: {
    port: 5173,
    open: true,
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
})