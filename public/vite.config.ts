// vite.config.ts
import { resolve } from 'path'; // ¡Importante añadir esta línea!
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // optimizeDeps: { // Puedes mantener o quitar esto según tus necesidades con lucide-react
  //   exclude: ['lucide-react'],
  // },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),     // Tu página principal de la tienda
        checkout: resolve(__dirname, 'index1.html')  // Tu página de checkout con React
        // El nombre 'checkout' aquí es solo una etiqueta para la entrada, puede ser lo que quieras.
        // Lo importante es que resolve(__dirname, 'index1.html') apunte a tu archivo.
      }
    }
  }
});