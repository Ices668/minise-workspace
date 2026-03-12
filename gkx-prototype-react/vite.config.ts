import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Serve prototype assets from /gkx/ so we can reuse the original URLs as-is.
export default defineConfig({
  plugins: [react()],
  base: './',
})
