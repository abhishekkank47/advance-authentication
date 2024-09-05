import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    email:{
       type:String,
       required:true,
       unique:true 
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    lastLogin:{
        type:Date,
        default:Date.now
    },
    verified:{
        type:Boolean,
        default:false
    },
    resetPasswordToken:String,
    resetPasswordExpiresAt:Date,
    verificatinToken:String,
    verificatinTokenExpireAt:Date

},{timestamps:true});

export const userModel = mongoose.model('user', userSchema )