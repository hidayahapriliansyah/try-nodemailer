import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// nademailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PW_APP,
  },
});

// testing transport nodemailer
const emailOption = (userEmail, verificationString) => {
  return {
    from: process.env.AUTH_EMAIL,
    to: userEmail,
    subject: 'Email Verification',
    html: `
      <p>Verify your email <a href="${process.env.APP_ENDPOINT}/verify/${verificationString}">here</a><p>
    `,
  };
};

const sendMail = async (emailOption) => {
  transporter.verify( async (error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Ready for messages');
      console.log(success);

      const info = await transporter.sendMail(emailOption);
      return info;
    }
  });
};

export {
  emailOption,
  sendMail,
};
