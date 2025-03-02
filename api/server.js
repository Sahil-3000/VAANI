const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const crypto = require("crypto");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Enable CORS

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => {
  console.error("❌ MongoDB connection error:", err);
});

// Define User schema and model
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePicture: { type: String, default: "" },
}, { collection: "users" });

const User = mongoose.model("User", userSchema);

// Gravatar Function
const getGravatarUrl = (email) => {
  const hash = crypto.createHash("md5").update(email.trim().toLowerCase()).digest("hex");
  return `https://www.gravatar.com/avatar/${hash}`;
};

// Status Check Route
app.get("/api/status", (req, res) => {
  res.json({ status: "Server is running on Vercel" });
});

// Registration Route
app.post("/api/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (await User.findOne({ username })) {
      return res.json({ success: false, message: "Username already exists" });
    }
    if (await User.findOne({ email })) {
      return res.json({ success: false, message: "Email already exists" });
    }
    const profilePicture = getGravatarUrl(email);
    const newUser = new User({ username, email, password, profilePicture });
    await newUser.save();
    res.json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Login Route
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username, password });
    if (user) {
      res.json({ success: true, message: "Login successful", profilePicture: user.profilePicture });
    } else {
      res.json({ success: false, message: "Invalid username or password" });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Forget Password Route
app.post("/api/forget-password", async (req, res) => {
  const { username, newPassword } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user) {
      user.password = newPassword;
      await user.save();
      res.json({ success: true, message: "Password updated successfully" });
    } else {
      res.json({ success: false, message: "Username not found" });
    }
  } catch (error) {
    console.error("Forget password error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Export for Vercel
module.exports = app;
