import { sendResponse } from './index';
import { NextFunction, Request, Response } from "express";
const deepTrim = require('deep-trim');

export const DeepTrim = async (req: Request , res: Response, next: NextFunction) => {

if(req.body) {req.body = deepTrim(req.body)};
if(req.query) {req.query = deepTrim(req.query)};
	next();
}



