import express from "express";
import { connectDB } from "./Db/connectDB.js";
import dotenv from "dotenv"
import { authRouter } from "./Routes/authRoutes.js";

dotenv.config()
connectDB()
const app = express();
const Port = process.env.PORT || 8080;

//MIDDELWARES
app.use(express.urlencoded({extended:true}))
app.use(express.json())
//MIDDELWARES

//ROUTES
app.use('/api/v1/auth', authRouter )
//ROUTES



app.listen( Port , ()=>{
    console.log(`SERVER IS RUNNING ON ${Port}`)
})
