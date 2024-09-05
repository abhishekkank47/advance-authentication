import mongoose from "mongoose";

export const connectDB = async(req,res)=>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`DATABASE CONNECTED SUCCESFULLY`)
    } catch (error) {
        console.log(`ERROR WHILE CONNECTING TO DATABASE : ${error}`)
        process.exit(1)
    }
}