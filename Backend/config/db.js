const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
    try{
        const mongoUrl = process.env.MONGO_URL;
        await mongoose.connect(mongoUrl);
        console.log("MongoDB connected");
    }
    catch(err){
        console.error("MongoDB connection failed:", err && err.message ? err.message : err);
        
    }
}

module.exports = connectDB;
