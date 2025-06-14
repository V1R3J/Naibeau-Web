import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO);
        console.log(`Connected to MongoDB!`);
    } catch (error) {
        console.log(`Error ${error.message}`);
        process.exit(1); // 1: error, 0: success

    }
};