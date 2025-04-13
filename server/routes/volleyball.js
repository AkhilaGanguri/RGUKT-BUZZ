import express from 'express';
import VolleyballGame from '../models/VolleySchema.js';
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { teams, winner, link } = req.body;
        const newGame = new VolleyballGame({ teams, winner, link }); // Include link
        const savedGame = await newGame.save();
        res.status(201).json(savedGame);
    } catch (error) {
        console.error('Error creating Volleyball game:', error);
        res.status(500).json({ error: 'Failed to create Volleyball game' });
    }
});

router.get('/', async (req, res) => {
    try {
        const games = await VolleyballGame.find().sort({ _id: -1 });
        res.status(200).json(games);
    } catch (error) {
        console.error('Error fetching Volleyball games:', error);
        res.status(500).json({ error: 'Failed to fetch Volleyball games' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const game = await VolleyballGame.findById(req.params.id);
        if (!game) {
            return res.status(404).json({ message: 'Game not found' });
        }
        res.json(game);
    } catch (error) {
        console.error('Error fetching Volleyball game:', error);
        res.status(500).json({ error: 'Failed to fetch Volleyball game' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { teams, winner, link } = req.body;
        const updatedGame = await VolleyballGame.findByIdAndUpdate(req.params.id, { teams, winner, link }, { new: true }); // Include link
        if (!updatedGame) {
            return res.status(404).json({ message: 'Game not found' });
        }
        res.json(updatedGame);
    } catch (error) {
        console.error('Error updating Volleyball game:', error);
        res.status(500).json({ error: 'Failed to update Volleyball game' });
    }
});

export default router;
