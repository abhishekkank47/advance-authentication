import { MailtrapClient } from"mailtrap"
import dotenv from 'dotenv'
dotenv.config();


export const mailtrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_API_KEY,
});

export const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "AdvanceAuthentication",
};

