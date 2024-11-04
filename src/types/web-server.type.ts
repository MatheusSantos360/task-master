import { Application } from "express";

export default interface IWebServer {
  app: Application;
  start: () => void;
  stop: () => void;
}