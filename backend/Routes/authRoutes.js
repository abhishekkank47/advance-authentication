import express from 'express'
import { loginController, logoutController, signUpController } from '../Controllers/authController.js'

export const authRouter =  express.Router()

//REGISTER ROUTE
authRouter.post('/signup', signUpController )

//LOGIN ROUTE
authRouter.post('/login', loginController )

//LOGOUT ROUTE
authRouter.post('/logout', logoutController )