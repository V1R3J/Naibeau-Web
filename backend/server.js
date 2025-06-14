import dotenv from 'dotenv'; // Correct import for dotenv
import express from 'express';
import { connectDB } from './config/db.js';
import partnerRoutes from "./routes/partner.route.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON request bodies

app.use("/api/partners", partnerRoutes);

app.listen(process.env.PORT, () => {
    connectDB();
    console.log('Server is up and running on port ' + PORT);
});
