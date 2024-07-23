import sendgrid from '@sendgrid/mail';
import dotenv from 'dotenv';
dotenv.config();

interface EmailI {
  to: string;
  from: string;
  subject: string;
  text: string;
  html: string;
}

const SendKey = process.env.SENDGRID_API_KEY!;
sendgrid.setApiKey(SendKey);

const sendEmail = ({ to, from, subject, text, html }: EmailI) => {
  const msg = { to, from, subject, text, html };
  return sendgrid.send(msg);
};

export default sendEmail;
