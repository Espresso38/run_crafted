import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import VDOTCalculator from './pages/VDOTCalculator.jsx'
import PacesTable from './components/PacesTable.jsx'
import TrainingPlan from './pages/TrainingPlan.jsx'
import SignupForm from './pages/SignupForm.jsx'
import LoginForm from './pages/LoginForm.jsx'
import './index.css'

createRoot(document.getElementById('content')).render(
  <StrictMode>
    <Nav />
    <Home />
    <VDOTCalculator />
    <PacesTable />
    <TrainingPlan />
    <SignupForm />
    <LoginForm />
    <Footer />
  </StrictMode>,
)

createRoot(document.getElementById('content')).render(
  <StrictMode>
    <LoginForm />
  </StrictMode>,
)