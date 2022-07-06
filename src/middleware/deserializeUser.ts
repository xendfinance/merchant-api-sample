import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { sendResponse, StatusCode } from "../utils";
import { JWTMerchant } from "../types/JwtMerchant";

const deserializeMerchant = async (
  req: Request & { Merchant: string; jwtMerchant: JWTMerchant },
  res: Response,
  next: NextFunction
) => {
  var header = req.headers["authorization"];
  let token;
  if (typeof header !== "undefined") {
    const bearer = header.split(" ");
    token = bearer[1];
  }
  if (!token) {
    return sendResponse(
      res,
      StatusCode.UNAUTHORIZED,
      "No authorization header"
    );
  } else {
    jwt.verify(token, process.env.privateKey, (err, decoded) => {
      if (!decoded)
        return sendResponse(
          res,
          StatusCode.UNAUTHORIZED,
          "Unauthorized request"
        );
      else {
        // also check if the decode token is a verified Merchant
        if (decoded.isVerified && !decoded.deactivated) {
          req.Merchant = decoded.Merchant;
          req.jwtMerchant = decoded;
          next();
        } else
          return sendResponse(
            res,
            StatusCode.UNAUTHORIZED,
            "Please verify account"
          );
      }
    });
  }
};

export default deserializeMerchant;
