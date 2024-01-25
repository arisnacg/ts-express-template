import "reflect-metadata";
import express, { Application } from "express";
import { useExpressServer } from "routing-controllers";
import IndexController from "controllers/indexController";
import { morganMiddleware } from "@/middlewares/morgan";
import morgan from "morgan";

export default class App {
  public app: Application;
  public port: string | number;
  public env: string;
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8000;
    this.env = process.env.NODE_ENV || "development";

    this.initializeMiddlewares();
    this.initializeControllers();
  }

  initializeMiddlewares() {
    this.app.use(morganMiddleware);
  }

  initializeControllers() {
    const controllers = [IndexController];
    useExpressServer(this.app, {
      cors: {
        origin: process.env.ORIGIN,
        credentials: process.env.CREDENTIALS,
      },
      controllers,
      defaultErrorHandler: true,
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`App is listening on port ${this.port}`);
    });
  }
}
