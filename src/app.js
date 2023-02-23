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

// nademailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PW_APP,
  },
});

// testing transport nodemailer
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready for messages');
    console.log(success);
  }
})

// routes
app.use(router);

