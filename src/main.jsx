import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import './index.css'

createRoot(document.getElementById('content')).render(
  <StrictMode>
    <Nav />
    <Home />
    <Footer />
  </StrictMode>,
)