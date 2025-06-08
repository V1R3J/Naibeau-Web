const express = require('express');
const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // You'll need to install this too

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for frontend requests

app.post('/api/save-phone', async (req, res) => {
  try {
    const { phoneNumber, timestamp } = req.body;

    if (!phoneNumber || !timestamp) {
      return res.status(400).json({ message: 'Phone number and timestamp are required' });
    }

    const filePath = path.join(__dirname, 'backend', 'numbers.xlsx');
    let existingData = [];

    // Check if file exists and read existing data
    if (fs.existsSync(filePath)) {
      try {
        const workbook = XLSX.readFile(filePath);
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        existingData = XLSX.utils.sheet_to_json(worksheet);
      } catch (error) {
        console.log('Error reading existing file:', error);
      }
    } else {
      // Create backend directory if it doesn't exist
      const backendDir = path.join(__dirname, 'backend');
      if (!fs.existsSync(backendDir)) {
        fs.mkdirSync(backendDir, { recursive: true });
      }
    }

    // Add new entry
    const newEntry = {
      'Phone Number': phoneNumber,
      'Timestamp': timestamp
    };

    existingData.push(newEntry);

    // Create new workbook and worksheet
    const newWorkbook = XLSX.utils.book_new();
    const newWorksheet = XLSX.utils.json_to_sheet(existingData);

    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, 'Phone Numbers');

    // Write file
    XLSX.writeFile(newWorkbook, filePath);

    res.status(200).json({ message: 'Phone number saved successfully' });

  } catch (error) {
    console.error('Error saving phone number:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});