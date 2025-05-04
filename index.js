// index.js
console.log("📌 index.js is executing...");  // This must print!

console.log("📌 Script starting...");

// Load environment variables from .env file
require('dotenv').config();
console.log("✅ .env loaded");

const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

console.log("🔁 Connecting to MongoDB...");

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("✅ Connected to MongoDB Atlas");
}).catch((err) => {
    console.error("❌ MongoDB connection error:", err);
});

// Test route
app.get("/", (req, res) => {
    res.send("✅ MongoDB Atlas Cloud is Working!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
