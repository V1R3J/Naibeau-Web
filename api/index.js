import dotenv from 'dotenv'; // Correct import for dotenv
import express from 'express';
import mongoose from 'mongoose';

// Load environment variables
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.error(err);
  });

const app = express();

app.listen(3000, () => {
  console.log('Server is up and running on port 3000');
});
