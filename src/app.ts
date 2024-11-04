import { config } from 'dotenv';
import Database from './functions/Database';
import WebServer from './server';
import IApp, { Config } from './types/app.types';

config();

function App(config: Config = {}): IApp {
  const database = config.database || Database();
  const server = config.server || WebServer();

  const start = async () => {
    await database.connect(process.env.MONGODB_TOKEN!);
    server.start();
  };

  const stop = async () => {
    server.stop();
    await database.disconnect();
  };

  return { start, stop };
}

App().start();

export default App;
