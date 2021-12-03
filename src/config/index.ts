import * as dotenv from 'dotenv';

dotenv.config();

const configuration = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  username: process.env.username,
  password: process.env.password,
};

export { configuration };
