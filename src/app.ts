import { config } from 'dotenv';
import Database from './functions/Database';
import WebServer from './server';
import { Config } from './types/mocks/app.types';

config();

function App(config: Config = {}) {
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

const { start, stop } = App()
start()
setTimeout(() => { stop(); }, 5000)

export default App;
