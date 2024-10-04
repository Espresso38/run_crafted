import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

function Nav({ isAuthenticated, setIsAuthenticated }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsAuthenticated(false);
        navigate('/login');
    };

    return (
        <nav className="flex flex-wrap justify-center items-center w-full h-auto gap-3 p-4 bg-slate-400 text-lg font-semibold md:gap-7 md:h-1/10">
            <Link to="/">Home</Link>
            <Link to="/vdot-calc">V-DOT Calc</Link>
            <Link to="/training-plans">Training Plans</Link>
            {isAuthenticated ? (
                <button onClick={handleLogout}>Logout</button>
            ) : (
                <Link to="/login">Login</Link>
            )}
        </nav>
    );
}

Nav.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    setIsAuthenticated: PropTypes.func.isRequired
};

export default Nav;
