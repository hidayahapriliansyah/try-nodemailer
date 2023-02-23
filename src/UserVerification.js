import mongoose from 'mongoose';

const userVerificationSchema = mongoose.Schema({
  user_id: {
    type: String,
    require: true,
  },
  verification_string: {
    type: String,
    require: true,
  },
  expiredAt: {
    type: Date,
    require: true,
  },
}, { timestamps: true });

const UserVerification = mongoose.model('user_verification', userVerificationSchema);

export default UserVerification;
