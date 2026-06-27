import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Garante que o roteamento de páginas do React funcione ao dar F5
    historyApiFallback: true, 
  },
})
