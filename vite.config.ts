import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['wasm_demo']
  },
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        shader: "./logo_shader.html",
        slice: "./slicing_game.html",
      },
    },
  },
})