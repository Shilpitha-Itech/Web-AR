import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { CameraKit } from './contexts/CameraKitContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CameraKit>
      <App />
    </CameraKit>
  </React.StrictMode>
);
