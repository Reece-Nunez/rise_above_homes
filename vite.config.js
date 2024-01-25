import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteFaviconsPlugin from 'favicons'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/rise_above_homes',
  plugins: [
    react(),
    ViteFaviconsPlugin('./src/assets/transparent_black_just_logo.svg')
  ],
})