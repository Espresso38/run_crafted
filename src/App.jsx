import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Nav from './frontend/components/Nav';
import Home from './frontend/pages/Home';
import VDOTCalc from './frontend/pages/VDOTCalc';
import TrainingPlan from './frontend/pages/TrainingPlan';
import Footer from './frontend/components/Footer';
import LoginForm from './frontend/pages/LoginForm';
import SignupForm from './frontend/pages/SignupForm';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return localStorage.getItem('isAuthenticated') === 'true';
    });
    const [username, setUsername] = useState(localStorage.getItem('username') || '');

    useEffect(() => {
        localStorage.setItem('isAuthenticated', isAuthenticated);
        localStorage.setItem('username', username);
    }, [isAuthenticated, username]);

    return (
        <Router>
            {isAuthenticated && <Nav isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />}
            
            <Routes>
                <Route path="/login" element={<LoginForm setIsAuthenticated={setIsAuthenticated} setUsername={setUsername} />} />
                <Route path="/signup" element={<SignupForm />} />
                <Route path="/" element={isAuthenticated ? <Home username={username} /> : <Navigate to="/login" replace />} />
                <Route path="/vdot-calc" element={isAuthenticated ? <VDOTCalc /> : <Navigate to="/login" replace />} />
                <Route path="/training-plans" element={isAuthenticated ? <TrainingPlan /> : <Navigate to="/login" replace />} />
            </Routes>
            {isAuthenticated && <Footer />}
        </Router>
    );
}

export default App;