require('dotenv').config(); // Add this line at the top
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const crypto = require('crypto');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'HTML Files')));
app.use('/css', express.static(path.join(__dirname, 'CSS Files')));
app.use('/js', express.static(path.join(__dirname, 'JS Files')));
app.use('', express.static(path.join(__dirname, 'covers')));
app.use('', express.static(path.join(__dirname, 'songs')));
app.use('', express.static(path.join(__dirname, 'albums')));
app.use('', express.static(path.join(__dirname, 'singles')));
app.use(express.static(__dirname)); // Serve static files from the root directory

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/vaani-login")
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define User schema and model
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: { type: String, default: '' }
}, { collection: 'users' });

const User = mongoose.model('User', userSchema);

// Function to get Gravatar URL
const getGravatarUrl = (email) => {
    const hash = crypto.createHash('md5').update(email.trim().toLowerCase()).digest('hex');
    return `https://www.gravatar.com/avatar/${hash}`;
};

// Registration endpoint
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    console.log(`Registration attempt: ${username}, ${email}`);
    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.json({ success: false, message: 'Username already exists' });
        }
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.json({ success: false, message: 'Email already exists' });
        }
        const profilePicture = getGravatarUrl(email);
        const newUser = new User({ username, email, password, profilePicture });
        await newUser.save();
        console.log('User registered successfully');
        res.json({ success: true, message: 'User registered successfully' });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Login endpoint
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username, password });
        if (user) {
            res.json({ success: true, message: 'Login successful', redirect: '/index.html', profilePicture: user.profilePicture });
        } else {
            res.json({ success: false, message: 'Invalid username or password' });
        }
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Forget password endpoint
app.post('/forget-password', async (req, res) => {
    const { username, newPassword } = req.body;
    try {
        const user = await User.findOne({ username });
        if (user) {
            user.password = newPassword;
            await user.save();
            res.json({ success: true, message: 'Password updated successfully' });
        } else {
            res.json({ success: false, message: 'Username not found' });
        }
    } catch (error) {
        console.error('Forget password error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Serve the login page
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'HTML Files', 'login.html'));
});

// Serve the index page
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve the register page
app.get('/register.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'HTML Files', 'register.html'));
});

// Serve the forget password page
app.get('/forget-password.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'HTML Files', 'forget-password.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});



