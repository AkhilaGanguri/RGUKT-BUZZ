import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './Login.css';

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility
    const [errorMessage, setErrorMessage] = useState(''); // State to handle error messages

    async function submit(e) {
        e.preventDefault();

        // Validate email and password before submitting
        if (!validateEmail(email)) {
            setErrorMessage("Invalid email address");
            return;
        }

        if (!validatePassword(password)) {
            setErrorMessage("Password must be at least 6 characters long");
            return;
        }

        try {
            await axios.post("http://localhost:3005/signup", {
                email,
                password
            })
            .then(res => {
                if (res.data === "exist") {
                    alert("User already exists");
                } else if (res.data === "notexist") {
                    history("/home", { state: { id: email } });
                }
            })
            .catch(e => {
                alert("Wrong details");
                console.log(e);
            });

        } catch (e) {
            console.log(e);
        }
    }

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    // Function to validate email format
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Function to validate password (minimum length)
    const validatePassword = (password) => {
        return password.length >= 6;
    };

    return (
        <div className="login">
            <h1 className="loginh1"> <br/><br/>Start Your PlayGround </h1>
            <form className="login_form" onSubmit={submit}>
                <input
                    className="login_inputs"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <div className="password-input">
                    <input
                        className="login_inputs"
                        type={passwordVisible ? "text" : "password"}
                        value={password}
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
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <input className="login_btn" type="submit" value="Sign Up" />
            </form>

            <br />
            <p id="noacct">Already Have An Account?</p>
            <Link to="/login" id="signup_link">Login</Link>
        </div>
    );
}

export default Login;
