import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const validate = () => {
        let valid = true;
        const newErrors = { username: '', email: '', password: '' };

        if (!username) {
            newErrors.username = 'Username is required';
            valid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!emailRegex.test(email)) {
            newErrors.email = 'Email is not valid';
            valid = false;
        }

        if (!password) {
            newErrors.password = 'Password is required';
            valid = false;
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long';
            valid = false;
        }

        setErrors(prevErrors => ({
            username: newErrors.username || prevErrors.username,
            email: newErrors.email || prevErrors.email,
            password: newErrors.password || prevErrors.password,
        }));

        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            if (response.ok) {
                alert('Signup successful!');
                setUsername('');
                setEmail('');
                setPassword('');
                setErrors({ username: '', email: '', password: '' });
                navigate('/login')
            } else {
                const errorData = await response.json();
                alert(`Signup failed: ${errorData.message}`);

                setErrors({ username: '', email: '', password: '' });

                if (errorData.message.includes('Username already exists')) {
                    setErrors({ username: 'Username is already taken' });
                } else if (errorData.message.includes('Email already exists')) {
                    setErrors({ email: 'Email is already in use' });
                }
            }
        } catch (error) {
            console.error('Error during signup:', error);
            alert('There was an error signing up');
        }
    };

    const goToLogin = () => {
        navigate('/login');
    };

    return (
        <div className="flex justify-around items-center h-screen md:h-screen w-full md:w-1/5 p-2 md:p-8 rounded-3xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-xl bg-slate-200 p-12 shadow-2xl shadow-neutral-800 rounded-3xl">
                <h2 className="text-center text-3xl">Sign Up</h2>
                <div>
                    <label htmlFor="">
                        Username
                    </label>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className='p-2 rounded-xl'
                    />
                    {errors.username && <p className="error text-red-600">*{errors.username}</p>}
                </div>
                <div>
                    <label htmlFor="">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className='p-2 rounded-xl'
                    />
                    {errors.email && <p className="error text-red-600">*{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className='p-2 rounded-xl'
                    />
                    {errors.password && <p className="error text-red-600">*{errors.password}</p>}
                </div>
                <button type="submit" className='p-2 rounded-xl bg-slate-400'>Sign Up</button>
                <button type="button" onClick={goToLogin} className='text-center p-2 rounded-xl bg-slate-400'>Login</button>
            </form>
        </div>
    );
};

export default SignupForm;
