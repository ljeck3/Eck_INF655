import { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';

  function Register() {
    const { register } = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = async (e) => { //email and password coming from state now. 
        e.preventDefault();
        try {
            await register(email, password);
            alert("User registered successfully");
        } catch (error) {
            console.error("Registration error:", error.message);
        }
        };

    return (
    <div>
       <form onSubmit={handleRegister}>
            <label htmlFor="email">Email:</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="register-email" name="email" required/><br />

            <label htmlFor="password">Password:</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="register-password" name="password" required/><br />

            <button type="submit">Register</button>
       </form>
    </div>
    );
}

export default Register;