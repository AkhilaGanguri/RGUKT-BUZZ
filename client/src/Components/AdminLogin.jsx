import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility

    const users = [
        { email: "akhila@gmail.com", password: "akhila123" },
        { email: "sravya@gmail.com", password: "sravya123" },
        { email: "rafi@gmail.com", password: "rafi123" },
        { email: "sainaik@gmail.com", password: "sainaik123" },
        { email: "anji@gmail.com", password: "anji123" }
    ];

    const submit = (e) => {
        e.preventDefault();
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            alert("Logged in successfully!");
            navigate("/admin", { state: { email } });
        } else {
            alert("Incorrect email or password.");
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="login">
            <h1 className="loginh1"><br/><br/>...Welcome Back Admin...</h1>
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
        </div>
    );
}

export default Login;
