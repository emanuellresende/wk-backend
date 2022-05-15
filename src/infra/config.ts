import mongoose from "mongoose";
import env from "src/main/env";

const syncDatabase = async () => {
  try {
    await mongoose.connect(env.MONGO.URI);
    console.log("Database connected");
  } catch (e) {
    console.error(e);
  }
};

export default syncDatabase;
