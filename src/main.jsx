import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

createRoot(document.getElementById('content')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)