import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/threadsmith/',
  resolve: {
    alias: {
      '@core': path.resolve(__dirname, '../src/core')
    }
  },
  server: {
    host: true
  }
})
