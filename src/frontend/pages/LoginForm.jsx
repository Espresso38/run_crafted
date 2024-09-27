import { useState } from "react";


const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState({
        username: '',
        password: '',
    });

    const validate = () => {
        let valid = true;
        const newErrors = { username: '', email: '', password: '' };
    
        if (!username) {
            newErrors.username = 'Username is required';
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
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
      
            if (response.ok) {
                alert('Login successful!');
                setUsername('');
                setPassword('');
                setErrors({ username: '', password: '' });
            } else {
                const errorData = await response.json();
                alert(`Login failed: ${errorData.message}`);
    
                setErrors({ username: '', password: '' });
    
                if (errorData.message.includes('User not found')) {
                    setErrors({ username: 'User not found'});
                } else if (errorData.message.includes('Invalid password')) {
                    setErrors({ password: 'Invalid password' });
                }
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('There was an error login in');
        }
    };

    return (
        <>
        <div className="flex justify-around items-center h-screen md:h-screen w-full md:w-1/5 p-2 md:p-8 rounded-3xl">
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-xl bg-slate-200 p-12 shadow-2xl shadow-neutral-800 rounded-3xl">
                    <h2 className="text-center text-3xl">Login</h2>
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
                    <button type="submit" className='p-2 rounded-xl bg-slate-400'>Login</button>
                    <a href="" className='text-center p-2 rounded-xl bg-slate-400'>Sign up</a>
                </form>
            </div>
        </>
    )
}


export default LoginForm;