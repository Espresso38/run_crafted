import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from './frontend/components/Nav.jsx'
import Footer from './frontend/components/Footer.jsx'
import Home from './frontend/pages/Home.jsx'
import VDOTCalculator from './frontend/pages/VDOTCalculator.jsx'
import PacesTable from './frontend/components/PacesTable.jsx'
import TrainingPlan from './frontend/pages/TrainingPlan.jsx'
import SignupForm from './frontend/pages/SignupForm.jsx'
import LoginForm from './frontend/pages/LoginForm.jsx'
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