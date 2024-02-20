import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'mf1', // Nom du micro-frontend
      filename: 'remoteEntry.js', // Nom du fichier d'entrée distant
      exposes: {
        './App': './src/App.vue', // Exposer des composants ou des fonctionnalités
        // Ajoutez d'autres exposés au besoin
      },
      shared: ['vue'], // Modules partagés avec l'hôte
    }),
  ],
  build: {
    target: 'esnext', // Should be a target that supports dynamic imports and top level await
  },
})
