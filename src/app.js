import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

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

// routes
app.use(router);

