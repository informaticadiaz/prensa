import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
    assetsInlineLimit: 4096,
    sourcemap: true,
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'script-defer',
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}']
      },
      manifest: {
        name: 'Prensa Obrera',
        short_name: 'Prensa',
        start_url: '/',
        display: 'standalone',
        background_color: '#222',
        description: 'La Voz de los trabajadores',
        theme_color: '#222',
        dir: 'ltr', // Agregando la dirección de izquierda a derecha (ltr)
        orientation: 'natural', // Agregando la orientación (puedes usar 'any', 'natural', 'landscape', 'portrait', etc.)
        lang: 'es-AR',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],
        prefer_related_applications: true,
        categories: [
          'politics',
        ],
        display_override: [
          'standalone',
          'fullscreen',
          'window-controls-overlay'
        ],
        id: 'prensa_seccional_la_plata_uf'
      },      

    }),
  ],
  
})
