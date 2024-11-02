import express, { Application } from 'express';
import http from 'http';

function WebServer() {
  const app: Application = express();
  const port = 3000;
  let server: http.Server | null = null;

  const start = () => {
    server = app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  };

  const stop = () => {
    if (server) {
      server.close(() => {
        console.log('Server stopped');
      });
    }
  };

  return { app, start, stop };
}

export default WebServer;
