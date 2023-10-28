import React, { useState } from 'react';

export const Register =(props) => {
        const [email, setEmail] = useState('');
        const [pass, setPass] = useState('');
        const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="auth-form-container">
            <h2> Register</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name : </label>
                <input value={name} onChange={(e) => setName(e.target.value)}type="name" placeholder="Full Name" id="name" name="name" />
                <label htmlFor="email">Email : </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Enter Your Email" id="email" name="email" />
                <label htmlFor="password">Password : </label>
                <input value={email} onChange={(e) => setPass(e.target.value)}type="password" placeholder="***" id="password" name="password" />
                <button type='submit'>Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already Have Account? Login Here.</button>
        </div >
        
    )
}