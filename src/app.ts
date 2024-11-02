import { config } from 'dotenv';
import Database from './functions/Database';
import WebServer from './server';
import { Mocks } from './types/mocks/app.types';

config();

function App(mocks: Mocks = {}) {
  const database = mocks.database || Database();
  const server = mocks.server || WebServer();

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

App().start()

export default App;
