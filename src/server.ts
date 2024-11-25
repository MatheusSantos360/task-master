import express, { Application } from "express";
import loadRoutes from "./functions/loadRoutes";
import { jsonSyntaxErrorHandler } from "./middlewares/jsonSyntaxErrorHandler";
import IWebServer from "./types/web-server.type";

function WebServer(): IWebServer {
  const app: Application = express();
  const port = process.env.PORT || 3000;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let server: any;

  const start = () => {
    loadRoutes(app);

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(jsonSyntaxErrorHandler);

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
