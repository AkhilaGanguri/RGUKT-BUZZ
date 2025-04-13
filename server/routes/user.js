import express from 'express';
const router = express.Router();
import { User } from '../models/UserSchema.js';

router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });

        if (user) {
            return res.json({ message: "User already exists" });
        }

        const newUser = new User({
            email,
            password,
        });

        await newUser.save();
        return res.json({ message: "Record registered" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

export { router as UserRouter };