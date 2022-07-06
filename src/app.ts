require("dotenv").config();
import router from "./endpoints/v1";
import express, { Application, Request, Response } from "express";
import cors from "cors";
var useragent = require("express-useragent");
import ErrorHandler from "./utils/ErrorHandler";
import errorMiddleware from "./middleware/errors";
import helmet from "helmet";
const compression = require('compression');

import { DeepTrim } from "./utils/DeepTrim";


const path = require('path');
const cookieParser = require('cookie-parser');
const createApp = async () => {
  const app: Application = express();
  app.use(helmet()); // helmet must be the first to be used..
  app.disable('x-powered-by');
  app.use(compression())
  
  app.use(express.json());
  app.use(useragent.express());
  app.use(cors());
  app.use(express.urlencoded({ extended: true, limit: "10mb" }));

  // to use Cookie Session: Master Admin
  app.set("trust proxy", 1); // trust first proxy

app.use(cookieParser());

  // Auth
  app.use("/v1", DeepTrim, router);

  app.get("/", (req, res) => {
    res.status(200).json({
			message: "Hello seems you missed your way  🥰!!!",
		});
  });

  // Handle unhandled routes
  app.all("*", (req, res, next) => {
    next(new ErrorHandler("Route not found ni", 404));
  });
  // error handler
  app.use(errorMiddleware);

  return app;
};

export default createApp;
