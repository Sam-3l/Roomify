import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server:{
    allowedHosts:["805114c20b56d9c6702797c8d5f7d6a8.serveo.net"]
  }
})
