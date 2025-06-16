import dotenv from 'dotenv'; // Correct import for dotenv
import express from 'express';
import cors from 'cors'; // Import CORS
import { connectDB } from './config/db.js';
import partnerRoutes from "./routes/partner.route.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all origins (for development)
app.use(cors());

// OR use this instead for more security (uncomment the block below and comment the line above)
/*
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:5173'], // Add your frontend URLs
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
*/

app.use(express.json()); // Middleware to parse JSON request bodies

app.use("/api/partners", partnerRoutes);

app.listen(process.env.PORT, () => {
    connectDB();
    console.log('Server is up and running on port ' + PORT);
});