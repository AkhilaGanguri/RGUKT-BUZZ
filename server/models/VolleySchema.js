import mongoose from 'mongoose';

const PlayerSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const TeamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  players: [PlayerSchema],
  score: { type: Number, default: 0 },
  currentSet: { type: Number, default: 1 },
});

const VolleyballGameSchema = new mongoose.Schema({
  teams: [TeamSchema],
  winner: { type: String, required: true },
  link: { type: String, required: true }, // Add this line
});

const VolleyballGame = mongoose.model('VolleyballGame', VolleyballGameSchema);

export default VolleyballGame;
