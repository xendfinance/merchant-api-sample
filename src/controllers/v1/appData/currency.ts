import { Request, response, Response } from "express";
import { sendData, sendResponse, StatusCode } from '../../../utils/index';
import axios from "axios";
// you save the base url in your env file for easy access around the application
const baseUrl = process.env.baseUrl;

// get list of available currencies
export async function availableCurrencies(req: Request , res: Response) {
	try {
		// make api axios call to get the list of supported currencies 
	    const response = await axios.get(`${baseUrl}public/data/app/currencies`)
		return sendData(res, response.data.data);
	} catch (e) {
		return sendResponse(res, StatusCode.INTERNAL_SERVER_ERROR, e);
	}
}

// get list of available currencies that allow savings
export async function availableCurrencySavings(req: Request , res: Response) {
	try {
		// make api axios call to get the list of supported currencies that allow savings
	    const response = await axios.get(`${baseUrl}public/data/app/currencies/savings`)
		return sendData(res, response.data.data);
	} catch (e) {
		return sendResponse(res, StatusCode.INTERNAL_SERVER_ERROR, e);
	}
}

// get list of available currencies that allow savings
export async function availableCurrencyStaking(req: Request , res: Response) {
	try {
		// make api axios call to get the list of supported currencies that allow staking
	    const response = await axios.get(`${baseUrl}public/data/app/currencies/staking`)
		return sendData(res, response.data.data);
	} catch (e) {
		return sendResponse(res, StatusCode.INTERNAL_SERVER_ERROR, e);
	}
}