import express, { Application } from "express";
import IWebServer from "./types/web-server.type";

function WebServer(): IWebServer {
  const app: Application = express();
  const port = process.env.PORT || 3000;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let server: any;

  const start = () => {
    server = app.listen(port, () => {
      console.log(`[Server status]: running on http://localhost:${port}`);
    });
  };

  const stop = () => {
    if (server) {
      server.close(() => {
        console.log("[Server status]: stopped");
      });
    }
  };

  return { app, start, stop };
}

export default WebServer;
