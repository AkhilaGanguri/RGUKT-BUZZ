import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './ForgotPassword.css'; // Create and style this CSS file as needed

function ResetPassword() {
    const { token } = useParams();
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            const response = await axios.post(`http://localhost:3005/resetpassword/${token}`, {
                newPassword
            });

            if (response.data.message === "Password has been reset") {
                setMessage("Your password has been reset successfully.");
            } else {
                setMessage("Failed to reset password.");
            }
        } catch (error) {
            setMessage("An error occurred while resetting your password.");
            console.error(error);
        }
    }

    return (
        <div className="reset-password">
            <h1>Reset Password</h1>
            <form onSubmit={submit}>
                <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                    required
                />
                <button type="submit">Reset Password</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default ResetPassword;
