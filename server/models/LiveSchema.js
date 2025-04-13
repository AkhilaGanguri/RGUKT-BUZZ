import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
  name: String,
});

const teamSchema = new mongoose.Schema({
  name: String,
  players: [playerSchema],
  score: Number,
  selectedPlayer: Object, 
});

const inputSchema = new mongoose.Schema({
  teams: [teamSchema],
  winner: String,
  link: String, // Add this line
});

const InputData = mongoose.model('InputData', inputSchema);

export default InputData;
