import * as nodemailer from 'nodemailer';
import { MailI } from '../interfaces/common';

const MAIL_USER = process.env.MAIL_USER || 'ishopnodemailer@gmail.com';
const MAIL_PASS = process.env.MAIL_PASS || 'nodemailer1234';

const transporter = nodemailer.createTransport(
  {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: MAIL_USER,
      pass: MAIL_PASS,
    },
  },
  {
    from: `iShop <${MAIL_USER}>`,
  },
);

export const mailer = (message: MailI) => {
  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.error(error);
    }
  });
};

export const registrationMailSender = (email: string, firstName: string, lastName: string) => {
  const registrationMessage = {
    to: email,
    subject: 'You have been successfully registered to out site',
    html: `
      <h2>Welcome! ${firstName} ${lastName}</h2>
      <hr>
      <p>Your login: ${email}</p>
    `,
  };

  mailer(registrationMessage);
};
