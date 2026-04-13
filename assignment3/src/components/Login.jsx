import { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';

  function Login() {
    const { login } = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e) => { //email and password coming from state now. 
        e.preventDefault();
        try {
            await login(email, password);
            alert("Login successful");
        } catch (error) {
            console.error("Login error:", error.message);
        }
        };

    return (
    <div>
       <form onSubmit={handleLogin}>
            <label htmlFor="email">Email:</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="login-email" name="email" required/><br />

            <label htmlFor="password">Password:</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="login-password" name="password" required/><br />

            <button type="submit">Login</button>
       </form>
    </div>
    );
}

export default Login;