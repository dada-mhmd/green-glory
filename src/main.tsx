import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log('Starting React application...');

const rootElement = document.getElementById('root');
console.log('Root element:', rootElement);

if (!rootElement) {
  console.error('Root element with id "root" not found in DOM');
  throw new Error('Failed to find root element');
}

try {
  console.log('Creating React root...');
  const root = createRoot(rootElement);

  console.log('Rendering App component...');
  root.render(React.createElement(App));

  console.log('✅ Application rendered successfully');
} catch (error) {
  console.error('❌ Failed to render application:', error);

  // Fallback rendering
  rootElement.innerHTML = `
    <div style="
      display: flex; 
      justify-content: center; 
      align-items: center; 
      height: 100vh; 
      background: linear-gradient(135deg, #0a0a1a, #1a1a2e); 
      color: white; 
      font-family: system-ui;
      text-align: center;
    ">
      <div>
        <h1 style="font-size: 2rem; margin-bottom: 1rem;">Green Glory</h1>
        <p style="color: #64ffda;">Loading application...</p>
        <p style="color: #666; font-size: 0.9rem; margin-top: 1rem;">
          Error: ${error.message}
        </p>
      </div>
    </div>
  `;
}