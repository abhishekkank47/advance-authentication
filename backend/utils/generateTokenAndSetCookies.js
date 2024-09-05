import jwt from 'jsonwebtoken'

export const generateTokenAndSetCookies = (res, userid)=>{
    //GENERATION
    const token = jwt.sign({userid}, process.env.JWT_SECRETE, {expiresIn:"7d"})

    //SET TO COOKIE
    res.cookie("token", token, { 
        httpOnly:true, 
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000 //7days
    })

    return token
    
}