import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap-icons/font/bootstrap-icons.css";
// Import Bootstrap’s CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// (Optional) Import Bootstrap’s JS bundle for dropdowns, modals, etc.
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
