import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { emailOption, sendMail } from './emailSignupVerifier.js';
import UserVerification from './UserVerification.js';
import moment from 'moment-timezone';

const timeNowJakarta = moment.tz(new Date(), 'Asia/Jakarta');

const userSchema = mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: timeNowJakarta,
  },
  updated_at: {
    type: Date,
    default: timeNowJakarta,
  },
});

// userSchema.post('save', async function(doc, next) {
//   console.log('post userchema', doc);
//   const { _id: userId , email } = doc;
//   console.log(userId, email);

//   const verificationString = uuidv4() + userId;
//   const emailMessage = emailOption(email, verificationString);
//   const emailSent = await sendMail(emailMessage);
//   const userVer = UserVerification.create({
//     user_id: userId,
//     verification_string: verificationString,
//   });
//   console.log(userVer);
//   next();
// });

const User = mongoose.model('user', userSchema);

export default User;