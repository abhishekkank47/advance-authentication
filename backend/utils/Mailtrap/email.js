import { mailtrapClient, sender } from "./emailConfig.js"
import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTempelate.js"

export const sendVerificationEmail = async(email, verificationToken)=>{
    const recipent = [{email}]

    try {
        const response = await mailtrapClient.send(
            {
                from:sender,
                to:recipent,
                subject:"Verify your Email",
                html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
                category: "Email Verification"
            }
        )
        console.log('EMAIL SEND SUCCESSFULLY', response)
    } catch (error) {
        console.log(error)
        throw new Error(`Error sending Email: ${error}`)
    }
}