import express, { Application } from "express";
import { GetUsersController } from "./controllers/get-users";
import { DBGetUsersRepository } from "./repositories/get-users/get-users";
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

    app.get("/", async (req, res) => {
      const getUsersController = new GetUsersController(new DBGetUsersRepository());
      const result = await getUsersController.handle();
      res.send(result)
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
