import { Request, Response, NextFunction } from "express";
import { sendResponse, StatusCode } from "../utils";
import catchAsyncError from "./catchAsyncError";
import { JWTMerchant } from "../types/JwtMerchant";

export const isAdmin = async (
  req: Request & { jwtMerchant: JWTMerchant },
  res: Response,
  next: NextFunction
) => {
  // if (!req.jwtMerchant.isStaff) {
  //   return sendResponse(res, StatusCode.FORBIDDEN, "Access Denied!");
  // }

  // if (!req.jwtMerchant.enable2FA) {
  //   return sendResponse(res, StatusCode.FORBIDDEN, "Enable 2FA!");
  // }

  next();
};

export const isVerifiedAdmin = async (
  req: Request & { jwtMerchant: JWTMerchant },
  res: Response,
  next: NextFunction
) => {
  if (!req.jwtMerchant.isVerified) {
    return sendResponse(
      res,
      StatusCode.FORBIDDEN,
      "Access denied!. Kindly update your default password"
    );
  }

  next();
};

export const isRobotAuthorized = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const robotKey = process.env.XEND_ROBOT_KEY;

  const secretKey = req.headers["xend-robot-key"];

  // if (!secretKey || secretKey !== robotKey) {
  //   return sendResponse(res, StatusCode.FORBIDDEN, "Access denied!");
  // }

  next();
};
