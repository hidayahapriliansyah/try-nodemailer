import moment from "moment-timezone";
import dotenv from 'dotenv';

dotenv.config();

console.log('without timezone', new Date());
console.log('with timezone', moment.tz(new Date(), process.env.TIMEZONE));
