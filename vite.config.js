import { defineConfig } from 'vite';
import { ghPages } from "vite-plugin-gh-pages";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ghPages()],
  base: "https://natschlegel.github.io/",
  server: {
    host: '0.0.0.0', // Allows access from other devices
    port: 5173, // Default Vite port
  },
})
