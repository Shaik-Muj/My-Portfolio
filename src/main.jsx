import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Create root with specific React DOM client method
const container = document.getElementById('root');
const root = createRoot(container);

// Render without StrictMode temporarily for troubleshooting
root.render(<App />);
