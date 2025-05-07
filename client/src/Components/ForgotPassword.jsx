import React, { useState } from "react";
import axios from "axios";
import './ForgotPassword.css';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3005/forgotpassword", {
                email
            });

            if (response.data.message === "Email sent") {
                setMessage("A reset link has been sent to your email address.");
            } else {
                setMessage("This email address is not registered.");
            }
        } catch (error) {
            setMessage("An error occurred. Please try again.");
            console.error(error);
        }
    };

    return (
        <div className="forgot-password">
            <h1>Forgot Password</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
                <button type="submit">Send Reset Link</button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
}

export default ForgotPassword;
