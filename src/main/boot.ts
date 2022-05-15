import express from "express";
import cors from "cors";

import routes from "src/main/routes";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

const initializeServer = () => {
  app.use("/api", routes);

  app.listen(PORT, () => {
    console.log(`server runninng on ${PORT}`);
  });
};

export default initializeServer;
