import * as dotenv from "dotenv";
dotenv.config();

const env = {
  MONGO: {
    URI: process.env.MONGO_URI as string,
  },
};

export default env;
