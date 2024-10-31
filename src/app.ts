import express, { Application, Request, Response } from "express";
import { config } from "dotenv"

config()
const port = process.env.PORT || 3000

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
})

app.listen(port, () => {
  console.log("server is running on http://localhost:3000");
});
