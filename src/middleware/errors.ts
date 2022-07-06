import { Response, Request, NextFunction } from "express";
import { sendResponse, StatusCode } from "../utils";
import { capitalizeFirstLetter } from "../utils/helpers";

export default (err, req: Request, res: Response, next: NextFunction) => {
  const error = { ...err };
  error.message = err.message;

  if (err.details) {
    return sendResponse(res, StatusCode.BAD_REQUEST, error.message);
  }

  // handle Mongo duplicate error
  if (err.name === "MongoError" && err.code === 11000) {
    const fieldName = Object.keys(err.keyValue).join("");

    return sendResponse(
      res,
      StatusCode.BAD_REQUEST,
      `${capitalizeFirstLetter(fieldName)} already exist!`
    );
  }

  // handle invalid mongo id
  if (err.name === "CastError") {
    return sendResponse(res, StatusCode.BAD_REQUEST, "Invalid Id value");
  }

  const message = error.message || "Internal Server Error.";
  const statusCode = error.statusCode || StatusCode.INTERNAL_SERVER_ERROR;

  return sendResponse(res, statusCode, message);
};
