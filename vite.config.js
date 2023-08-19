import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
    // include: /\.jsx?$/,
  },
  resolve: {
    alias: {
      '@': '/src', // 例子别名，按需调整
    },
  },
})
