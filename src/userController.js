import User from './User.js';
import UserVerification from './UserVerification.js';

const signup_get = (req, res) => {
  res.send('signup get');
};

const signup_post = async (req, res) => {
  const payload = req.body;

  try {
    const user = User.create(payload);
    res.status(201).json({ status: 'success', data : { user } });
  } catch(err) {

  };
};

const verify_get = async (req, res) => {
  const uniqueString = req.params.unique;

  try {
    const userVerified = await UserVerification.findOne({ verification_string: uniqueString });
    console.log(userVerified);
    if (userVerified) {
      res.status(400).json({ status: 'ok', message: 'user verified' });
    } else {
      res.send('404');
    }
  } catch (err) {
    console.log(err);
  };
};

export {
  signup_get,
  signup_post,
  verify_get,
};
