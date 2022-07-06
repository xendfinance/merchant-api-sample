import { sendResponse } from './index';
//import { Console } from "console";
import { NextFunction, Request, Response } from "express";
const deepTrim = require('deep-trim');

export const DeepTrim = async (req: Request & { Merchant }, res: Response, next: NextFunction) => {

if(req.body) {req.body = deepTrim(req.body)};
if(req.query) {req.query = deepTrim(req.query)};

// we just add gracefully shutdown middleware here.

if (process.env.GRACEFUL_SHOT_DOWN === 'true') {
	sendResponse(res, 503, 'service not available, can you try again in 20 seconds time.')
} else {
	next();
}

}



