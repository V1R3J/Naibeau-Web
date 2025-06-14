import mongoose from "mongoose";

// Define the Partner schema with validation rules
const partnerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name must be at least 2 characters long"],
        maxlength: [50, "Name cannot exceed 50 characters"]
    },
    phone: {
        type: String, // Use String to preserve leading zeros if necessary
        required: [true, "Phone number is required"],
        match: [/^[6-9]\d{9}$/, "Phone number must be a valid Indian mobile number"],
        unique: true // Ensure phone numbers are unique
    }
});

// Create and export the Partner model
const Partner = mongoose.model('Partner', partnerSchema);

export default Partner;
