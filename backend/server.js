import dotenv from 'dotenv'; // Correct import for dotenv
import express from 'express';
import { connectDB } from './config/db.js';
import Partner from './models/partner.model.js';

// Load environment variables
dotenv.config();

const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies

app.post("/api/partners", async (req, res) => {
    const partner = req.body; // user will enter this data
    if (!partner.name || !partner.phone) {
        return res.status(400).json({ success: false, message: "Please provide all the details" });
    }

    const newPartner = new Partner(partner);

    try {
        await newPartner.save();
        res.status(201).json({ success: true, data: newPartner });
    } catch (error) {
        console.error("Error in create partner:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

app.listen(3000, () => {
    connectDB();
    console.log('Server is up and running on port 3000');
});
