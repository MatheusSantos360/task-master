import express, { Application } from "express";

function WebServer() {
    const app: Application = express();
    const port = 3000;

  const start = () => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  };

  return { app, start };
}

export default WebServer;
