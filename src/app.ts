import { Application } from "express";
import { connectDB } from "./config/mongodb.config";
import RabbitMQClient from "./rabbitmq/client";
import express from "express";
import { errorHandler } from "@nabeelktr/error-handler";


class App{
    public app: Application;

    constructor() {
      this.app = express();
      this.app.use(errorHandler);
        RabbitMQClient.initialize();
        connectDB()
    }
}

export default App