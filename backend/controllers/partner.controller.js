import Partner from "../models/partner.model.js";

export const postPartners = async (req, res) => {
    const partner = req.body; // User-provided data

    try {
        // Create a new Partner instance
        const newPartner = new Partner(partner);

        // Save the partner to the database
        await newPartner.save();
        res.status(201).json({ success: true, data: newPartner });
    } catch (error) {
        console.error("Error in creating partner:", error.message);

        // Handle duplicate key error for the phone number
        if (error.code === 11000 && error.keyPattern && error.keyPattern.phone) {
            return res.status(400).json({ 
                success: false, 
                message: "Phone number already exists. Try adding another one." 
            });
        }

        // Handle validation errors
        if (error.name === "ValidationError") {
            const messages = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({ success: false, message: messages.join(", ") });
        }

        // Handle other server errors
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
