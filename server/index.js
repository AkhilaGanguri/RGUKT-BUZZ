import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import InputData from './models/LiveSchema.js';
import VolleyballGame from './models/VolleySchema.js';
import { User } from './models/UserSchema.js';
import adminLiveRouter from './routes/adminlive.js';
import volleyballRouter from './routes/volleyball.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect("mongodb+srv://ganguriakhila:wQ4QmAtJSCibitpp@cluster0.w6xst3a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("MongoDB connected");
        startServer();
    })
    .catch((error) => {
        console.error('Failed to connect to MongoDB', error);
    });

function startServer() {
    app.use('/admin', adminLiveRouter);
    app.use('/volleyball', volleyballRouter);

    app.get("/home", cors(), (req, res) => {
        res.send("Welcome to the home page!");
    });

    app.post("/signup", async (req, res) => {
        const { email, password } = req.body;
        try {
            const check = await User.findOne({ email });
            if (check) {
                res.json("exist");
            } else {
                const newUser = new User({ email, password });
                await newUser.save();
                res.json("notexist");
            }
        } catch (e) {
            console.error(e);
            res.json("fail");
        }
    });

    app.post("/login", async (req, res) => {
        let { email, password } = req.body;
        email = email.trim().toLowerCase();
        password = password.trim();
    
        try {
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(401).json({ message: "User doesn't exist" });
            }
            const passwordMatch = (user.password === password);
            if (!passwordMatch) {
                return res.status(401).json({ message: "Incorrect email or password" });
            }
            return res.json({ message: "success" });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal server error" });
        }
    });

    app.post('/adminlive', async (req, res) => {
        try {
            const { teams, winner } = req.body;
            const inputData = new InputData({ teams, winner });
            const savedInputData = await inputData.save();
            res.status(201).json(savedInputData);
        } catch (error) {
            console.error('Error saving input data:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    });

    app.get('/adminlive', async (req, res) => {
        try {
            const inputData = await InputData.find();
            res.status(200).json(inputData);
        } catch (error) {
            console.error('Error fetching input data:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    });

    app.put('/adminlive', async (req, res) => {
        try {
          const { teams, winner, link } = req.body; // Include link
          const updatedInputData = await InputData.findOneAndUpdate({}, { teams, winner, link }, { new: true });
          res.json(updatedInputData);
        } catch (error) {
          console.error('Error updating input data:', error);
          res.status(500).json({ message: 'Internal server error' });
        }
      });

    app.listen(3005, () => {
        console.log("Server started on port 3005");
    });
}