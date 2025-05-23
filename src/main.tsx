import React from 'react'; // <--- LÍNEA AÑADIDA
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css'; // O el nombre correcto de tu archivo CSS global en src/

// Set the page title
document.title = "ClothEeasy - Finalizar Compra";

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error("main.tsx: ¡ERROR CRÍTICO! No se encontró el elemento <div id='root'>. React no puede iniciarse.");
  // Opcional: Mostrar un mensaje en la página si #root falta
  document.body.innerHTML = '<div style="color: red; padding: 20px;">Error: Elemento #root no encontrado.</div>';
}