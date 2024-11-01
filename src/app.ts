import { config } from "dotenv";
import Database from "./functions/Database";
import WebServer from "./server";
import { Mocks } from "./types/app.types";

config();

async function StartApp(mocks: Mocks = {}) {
  const database = mocks.database || Database();
  const server = mocks.server || WebServer();

  await database.connect(process.env.MONGODB_TOKEN!);
  server.start();
}

StartApp();

export default StartApp;
