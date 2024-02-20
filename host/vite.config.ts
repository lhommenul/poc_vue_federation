import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'host_app',
      remotes: {
        mf1: 'http://localhost:3001/remoteEntry.js', // URL du point d'entrée distant du micro-frontend
      },
      shared: ['vue'], // Modules partagés entre le micro-frontend et l'hôte
    }),
  ],
})