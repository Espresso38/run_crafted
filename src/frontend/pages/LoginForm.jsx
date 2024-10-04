import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function LoginForm({ setIsAuthenticated, setUsername }) {
    const [username, setUsernameInput] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const validate = () => {
        let valid = true;
        const newErrors = { username: '', password: '' };

        if (!username) {
            newErrors.username = 'Username is required';
            valid = false;
        }

        if (!password) {
            newErrors.password = 'Password is required';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                alert('Login successful!');
                // Update app state and local storage
                setIsAuthenticated(true);
                setUsername(data.user.username); // Set username here
                localStorage.setItem('isAuthenticated', 'true'); // Update localStorage
                localStorage.setItem('username', data.user.username); // Save username in localStorage

                // Reset the form inputs and errors
                setUsernameInput('');
                setPassword('');
                setErrors({ username: '', password: '' });
                navigate('/'); // Redirect to the home page
            } else {
                const errorData = await response.json();
                alert(`Login failed: ${errorData.message}`);
                setErrors({ username: '', password: '' });

                if (errorData.message.includes('User not found')) {
                    setErrors({ username: 'User not found' });
                } else if (errorData.message.includes('Invalid password')) {
                    setErrors({ password: 'Invalid password' });
                }
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('There was an error logging in');
        }
    };

    const goToSignup = () => {
        navigate('/signup');
    };

    return (
        <div className="flex justify-around items-center h-screen md:h-screen w-full md:w-1/5 p-2 md:p-8 rounded-3xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-xl bg-slate-200 p-12 shadow-2xl shadow-neutral-800 rounded-3xl">
                <h2 className="text-center text-3xl">Login</h2>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsernameInput(e.target.value)}
                        required
                        className="p-2 rounded-xl"
                    />
                    {errors.username && <p className="error text-red-600">*{errors.username}</p>}
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="p-2 rounded-xl"
                    />
                    {errors.password && <p className="error text-red-600">*{errors.password}</p>}
                </div>
                <button type="submit" className="p-2 rounded-xl bg-slate-400">Login</button>
                <button type="button" onClick={goToSignup} className="text-center p-2 rounded-xl bg-slate-400">
                    Sign up
                </button>
            </form>
        </div>
    );
};

LoginForm.propTypes = {
    setIsAuthenticated: PropTypes.func.isRequired,
    setUsername: PropTypes.func.isRequired,
};

export default LoginForm;