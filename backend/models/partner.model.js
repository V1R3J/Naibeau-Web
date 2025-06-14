import mongoose from "mongoose";

const partnerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
});

const Partner = mongoose.model('Partner', partnerSchema);

export default Partner;
