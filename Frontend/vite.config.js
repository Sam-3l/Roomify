import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(
    
  )],
  server:{
    allowedHosts:["2f1b864061a2a5deb5eeb31ce6992b41.serveo.net"]
  }
})
