const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const userController = require('../controllers/user');


router.get('/home', (req, res) => {
    res.render('user/home', { user: req.user });
});

// Like a song
router.post('/like/:songId', auth, userController.likeSong);

// Add to playlist
router.post('/playlist/:songId', auth, userController.addToPlaylist)
  
// Get liked songs
router.get('/likes', auth, userController.getLikedSongs);

// Get playlist
router.get('/playlist', auth, userController.getPlaylist);

// Unlike a song
router.delete('/like/:songId', auth, userController.unlikeSong);

// Remove song from playlist
router.delete('/playlist/:songId', auth, userController.removeFromPlaylist);

module.exports = {router};

