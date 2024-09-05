import { userModel } from "../Models/userModel.js"
import bcryptjs from 'bcryptjs'
import { verificationCode } from "../utils/generateVerificationCode.js"
import { generateTokenAndSetCookies } from "../utils/generateTokenAndSetCookies.js"

export const signUpController = async(req,res)=>{
    try {
        const {name, password, email}= req.body

        //VALIDATION
        if(!name || !password || !email ){
            return res.status(400).send(
               { 
                    success: false,
                    message: 'ALL FEILDS REQUIRED'
               }
            )
            throw new Error("All Feilds Required")
        }
        
        //EXISTENSE
        const userExist = await userModel.findOne({email})
        if(userExist){
            return res.status(400).send(
                { 
                     success: false,
                     message: 'USER ALREADY EXISTS'
                }
             )
        }

        //PASSWORD HASHING
        const hashedPassword = await bcryptjs.hash(password,10)

        //VERIFICATION CODE
        const verificationToken = verificationCode()

        //NEW USER INSIDE DATABASE
        const user = new userModel(
        {
            email,
            password:hashedPassword,
            name,
            verificationToken,
            verificatinTokenExpireAt:Date.now() + 24 * 60 * 60 *1000 //24hours
        })
        await user.save();

        //JWTTOKEN
        generateTokenAndSetCookies(res,user._id)

        //MESSAGE OF CREATION
        res.status(201).send(
            {
                success:true,
                message:"USER CREATED SUCCESFULLY",
                user:{
                    ...user._doc,
                    password:undefined
                }
            }
        )
    } catch (error) {
        res.status(400).json(
            { 
                success: false,
                message: error.message
           }
        )
        console.log(`ERROR WHILE SINGNUP`)
    }
}

// export const loginController = async(req,res)=>{
//     try {
        
//     } catch (error) {
//         console.log(`ERROR WHILE LOGIN`)
//     }
// }

// export const logoutController = async(req,res)=>{
//     try {
        
//     } catch (error) {
//         console.log(`ERROR WHILE LOGOUT`)
//     }
// }