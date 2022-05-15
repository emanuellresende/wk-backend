import "./main/path-alias";
import initializeServer from "src/main/boot";
import syncDatabase from "src/infra/config";
import model from "./infra/database/repository/user";

initializeServer();
syncDatabase();
