import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/rise_above_homes',
  plugins: [
    react(),
    svgr(),
  ],
});