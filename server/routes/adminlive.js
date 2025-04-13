import express from 'express';
const router = express.Router();
import InputData from '../models/LiveSchema.js'; 

router.post('/adminlive', async (req, res) => {
  try {
    const { teams, winner, link } = req.body; // Include link

    const inputData = new InputData({
      teams,
      winner,
      link, // Include link
    });

    const savedInputData = await inputData.save();
    res.status(201).json(savedInputData);
  } catch (error) {
    console.error('Error saving input data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.put('/adminlive', async (req, res) => {
  try {
    const { teams, winner, link } = req.body; // Include link
    const updatedInputData = await InputData.findOneAndUpdate({}, { teams, winner, link }, { new: true });
    res.json(updatedInputData);
  } catch (error) {
    console.error('Error updating input data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
