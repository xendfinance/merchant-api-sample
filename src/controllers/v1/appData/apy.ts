import { Request, response, Response } from "express";
import { sendData, sendResponse, StatusCode } from '../../../utils/index';
import axios from "axios";
// you save the base url in your env file for easy access around the application
const baseUrl = process.env.baseUrl;

// get list of daily apy
export async function dailyApy(req: Request , res: Response) {
	try {
        const params: any = req.query;
		const { fromDate, toDate } = params;
        const data = {fromDate , toDate}
		// make api axios call to get the daily apy
	    const response = await axios.get(`${baseUrl}public/data/app/apy/daily`,{data})
		return sendData(res, response.data.data);
	} catch (e) {
		return sendResponse(res, StatusCode.INTERNAL_SERVER_ERROR, e);
	}
}

// get list of daily apy of today
export async function todayApy(req: Request , res: Response) {
	try {
		// make api axios call to get the daily apy of today
	    const response = await axios.get(`${baseUrl}public/data/app/apy/daily/today`)
		return sendData(res, response.data.data);
	} catch (e) {
		return sendResponse(res, StatusCode.INTERNAL_SERVER_ERROR, e);
	}
}