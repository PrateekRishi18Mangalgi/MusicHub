const User = require('../models/user');
const Music = require('../models/music');
const bcrypt = require('bcrypt');
const { setUser } = require('../routes/auth');

async function handleUserSignup(req, res) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.json({ success: false, message: "All fields are required." });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ success: false, message: "User already exists." });
        }

        // Generate salt and hash the password (10 is the salt rounds)
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        await User.create({
            name,
            email,
            password: hashedPassword,  // Save the hashed password
        });

        return res.json({ success: true, message: "Signup successful!" });
    } catch (error) {
        console.error("Signup Error:", error);
        return res.json({ success: false, message: "Signup failed. Please try again." });
    }
}

async function handleUserLogin(req, res) {
    console.log("Login Request Received");
    const { email, password } = req.body;

    if (!email || !password) {
        return res.json({ success: false, message: "All fields are required." });
    }

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "Invalid username or password" });
        }

        // Compare provided password with stored hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.json({ success: false, message: "Invalid username or password" });
        }

        // Generate JWT token for authenticated user
        const token = setUser(user);
        
        // Store the token in a cookie
        res.cookie('token', token, { httpOnly: true });

        return res.json({ success: true, message: "Login successful!" });
    } catch (error) {
        console.error("Login Error:", error);
        return res.json({ success: false, message: "Login failed. Please try again." });
    }
}

exports.likeSong = async (req, res) => {
    const userId = req.user._id;
    const songId = req.params.songId;
  
    try {
      const user = await User.findById(userId);
      if (!user.likedSongs.includes(songId)) {
        user.likedSongs.push(songId);
        await user.save();
      }
      res.status(200).json({ message: 'Song liked successfully.' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to like song.', error });
    }
  };
  
  exports.addToPlaylist = async (req, res) => {
    const userId = req.user._id;
    const songId = req.params.songId;
  
    try {
      const user = await User.findById(userId);
      if (!user.playlist.includes(songId)) {
        user.playlist.push(songId);
        await user.save();
      }
      res.status(200).json({ message: 'Song added to playlist.' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to add song to playlist.', error });
    }
  };

  exports.getLikedSongs = async (req, res) => {
    try {
      const user = await User.findById(req.user._id).populate('likedSongs');
      res.status(200).json(user.likedSongs);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch liked songs.', error });
    }
  };
  
  exports.getPlaylist = async (req, res) => {
    try {
      const user = await User.findById(req.user._id).populate('playlist');
      res.status(200).json(user.playlist);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch playlist.', error });
    }
  };
  
  exports.unlikeSong = async (req, res) => {
    try {
      const user = await User.findById(req.user._id);
      user.likedSongs = user.likedSongs.filter(
        songId => songId.toString() !== req.params.songId
      );
      await user.save();
      res.status(200).json({ message: 'Song unliked successfully.' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to unlike song.', error });
    }
  };
  
  exports.removeFromPlaylist = async (req, res) => {
    try {
      const user = await User.findById(req.user._id);
      user.playlist = user.playlist.filter(
        songId => songId.toString() !== req.params.songId
      );
      await user.save();
      res.status(200).json({ message: 'Song removed from playlist.' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to remove song from playlist.', error });
    }
  };
  

module.exports = {
    handleUserSignup,
    handleUserLogin,
};

