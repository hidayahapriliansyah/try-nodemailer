import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

import router from './routes.js';

dotenv.config();
const app = express();

// connection to db
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_URI)
  .then((result) => app.listen(3002))
  .catch((err) => console.log(err));

// body parser
app.use(express.json());

// use uuid

// nademailer
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.AUTH_EMAIL,
//     pass: process.env.AUTH_PW_APP,
//   },
// });

// // testing transport nodemailer
// const emailOption = {
//   from: process.env.AUTH_EMAIL,
//   to: 'adimuhamadfirmansyah@gmail.com',
//   subject: 'Testing Nodemailer',
//   html: `<p>Tesing Success</p>`,
// };

// transporter.verify( async (error, success) => {
//   if (error) {
//     console.log('err', error);
//   } else {
//     console.log('Ready for messages');
//     console.log('succes', success);

//     const info = await transporter.sendMail(emailOption);
//     console.log('Email send test looking for error handling', info);
//   }
// });

// routes
app.use(router);
