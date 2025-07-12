const express = require('express');
const router = express.Router();
const User = require('../models/user'); 
const { restrictToLoggedInUseOnly } = require('../middleware/auth');

// Like a song
router.post('/like', restrictToLoggedInUseOnly, async (req, res) => {
  const { songId } = req.body;
  const user = await User.findById(req.user._id);

  if (!user.likedSongs.includes(songId)) {
    user.likedSongs.push(songId);
    await user.save();
  }

  res.status(200).json({ message: "Song liked!" });
});

// Add to playlist
router.post('/playlist', restrictToLoggedInUseOnly, async (req, res) => {
  const { songId } = req.body;
  const user = await User.findById(req.user._id);

  if (!user.playlist.includes(songId)) {
    user.playlist.push(songId);
    await user.save();
  }

  res.status(200).json({ message: "Song added to playlist!" });
});

// Get liked songs
router.get('/likes', restrictToLoggedInUseOnly, async (req, res) => {
  const user = await User.findById(req.user._id).populate('likedSongs');
  res.json(user.likedSongs);
});

// Get playlist songs
router.get('/playlist', restrictToLoggedInUseOnly, async (req, res) => {
  const user = await User.findById(req.user._id).populate('playlist');
  res.json(user.playlist);
});

module.exports = router;
