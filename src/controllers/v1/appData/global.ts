import { Request, response, Response } from "express";
import { sendData, sendResponse, StatusCode } from '../../../utils/index';
import axios from "axios";
// you save the base url in your env file for easy access around the application
const baseUrl = process.env.baseUrl;

// get application versions 
export async function appVersion(req: Request , res: Response) {
	try {
		// make api axios call to get the list of application version
	    const response = await axios.get(`${baseUrl}public/data/app/version`)
		return sendData(res, response.data.data);
	} catch (e) {
		return sendResponse(res, StatusCode.INTERNAL_SERVER_ERROR, e);
	}
}

// get application enums  
export async function globalEnum(req: Request , res: Response) {
	try {
		// make api axios call to get the list of application enums
	    const response = await axios.get(`${baseUrl}public/data/app/enum/global`)
		return sendData(res, response.data.data);
	} catch (e) {
		return sendResponse(res, StatusCode.INTERNAL_SERVER_ERROR, e);
	}
}

// get blockchain networks  
export async function blockchainNetworks(req: Request , res: Response) {
	try {
		// make api axios call to get the list of blockchain networks
	    const response = await axios.get(`${baseUrl}public/data/app/blockchain-networks`)
		return sendData(res, response.data.data);
	} catch (e) {
		return sendResponse(res, StatusCode.INTERNAL_SERVER_ERROR, e);
	}
}