import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot dari react-dom/client
import App from './App';
import './index.css';

// Temukan elemen root di HTML
const container = document.getElementById('root');

// Buat root menggunakan createRoot
const root = createRoot(container);

// Render aplikasi Anda
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);