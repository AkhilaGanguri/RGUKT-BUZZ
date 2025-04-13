// auth.js

import express from 'express';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import dotenv from 'dotenv';
import { User } from '../models/UserSchema.js';

dotenv.config();
const router = express.Router();

// Nodemailer setup (already defined in your code)

router.post("/forgotpassword", async (req, res) => {
    const { email } = req.body;
    const normalizedEmail = email.toLowerCase().trim(); // Normalize email by converting to lowercase and trimming whitespace

    try {
        const user = await User.findOne({ email: normalizedEmail });

        if (user) {
            const token = crypto.randomBytes(20).toString('hex');
            user.resetPasswordToken = token;
            user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
            await user.save();

            const resetLink = `http://localhost:3000/resetpassword/${token}`;
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: normalizedEmail,
                subject: 'Password Reset',
                text: `Click on the following link to reset your password: ${resetLink}`
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error(error);
                    res.send({ message: "An error occurred while sending the email." });
                } else {
                    console.log('Email sent: ' + info.response);
                    res.send({ message: "Email sent" });
                }
            });
        } else {
            res.send({ message: "Email not registered" });
        }
    } catch (error) {
        console.error('Error during forgot password:', error);
        res.status(500).send({ message: "Internal server error" });
    }
});

export default router;
