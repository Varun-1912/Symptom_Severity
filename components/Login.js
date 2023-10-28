import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const Login =(props) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(email);
        navigate('/Interface');
    }
    return (
        <div className="auth-form-container">
            <h2> Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email : </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Enter Your Email" id="email" name="email" />
                <label htmlFor="password">Password : </label>
                <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="***" id="password" name="password" />
                <button type="submit" >Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't Have Account? Register Here.</button>
        </div>
    )
}