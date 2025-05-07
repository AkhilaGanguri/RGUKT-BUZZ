// Login.jsx
import React, { useState } from "react";
import axios from "axios";
import './Login.css';
import { useNavigate, Link } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    async function submit(e) {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3005/login", {
                email,
                password
            });

            if (response.data.message === "success") {
                alert("Logged in successfully!");
                navigate("/home", { state: { email } });
            } else {
                alert("Incorrect email or password.");
            }
        } catch (error) {
            alert("An error occurred while logging in.");
            console.error(error);
        }
    }

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="login">
            <h1 className="loginh1"><br /><br />...Welcome Back...</h1>
            <form className="login_form" onSubmit={submit}>
                <input
                    className="login_inputs"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <div className="password-input">
                    <input
                        className="login_inputs"
                        type={passwordVisible ? "text" : "password"}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <i
                        className={`eye-icon ${passwordVisible ? "visible" : ""}`}
                        onClick={togglePasswordVisibility}
                    >
                        {passwordVisible ? "👁️" : "👁️‍🗨️"}
                    </i>
                </div>
                <input className="login_btn" type="submit" value="Login" />
            </form>
            <br />
            <p id="noacct">Don't Have An Account?</p>
            <Link to="/signup" id="signup_link">Signup</Link>
            <br />
            <Link to="/forgotpassword" id="forgot_password_link">Forgot Password?</Link>
        </div>
    );
}

export default Login;
