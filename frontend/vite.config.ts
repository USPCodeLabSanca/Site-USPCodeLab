import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()], // adicionei tsconfigPaths para resolver inclusao absoluta com o vite
  css: {
    postcss: './postcss.config.js',
  },
})
