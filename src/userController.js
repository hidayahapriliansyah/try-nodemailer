import User from './User.js';

const signup_get = (req, res) => {
  res.send('signup get');
};

const signup_post = (req, res) => {
  const payload = req.body;

  User.create(payload)
    .then((result) => res.status(201).json({ status: 'ok', user: result._id }))
    .catch((err) => console.log(err));
};

export {
  signup_get,
  signup_post,
};
