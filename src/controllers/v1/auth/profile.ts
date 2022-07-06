import { Request, response, Response } from "express";
import { sendData, sendResponse, StatusCode } from '../../../utils/index';
import axios from "axios";
import { setHeader } from "../../../utils/apiRequesthandler";
const dns = require('dns');
const baseUrl = process.env.baseUrl;
//get merchant profile
export async function getMerchantProfile(req: Request , res: Response) {
	try {

		const headersData =  await  setHeader({})
		// make api axios call to get the profile of a merchant
	    const response = await axios.get(`${baseUrl}public/me/profile`,{headers:{Authorization: headersData.Authorization, Authentication:headersData.Authentication,timestamp:headersData.timestamp,Memberemail:headersData.Memberemail, Apisignature:headersData.Apisignature,UserLanguage:headersData.UserLanguage,MerchantCode:headersData.MerchantCode.toString()}});
		return sendData(res,  response.data.data);
	} catch (e) {
		console.log(e)
		return sendResponse(res, StatusCode.INTERNAL_SERVER_ERROR, e);
	}
}

// get mechant subuser profile
export async function getSubUserProfile(req: Request , res: Response) {
	try {

		const headersData =  await  setHeader({})
		// make api axios call to get the profile of a merchant subuser
	    const response = await axios.get(`${baseUrl}public/member/profile`,{headers:{Authorization: headersData.Authorization, Authentication:headersData.Authentication,timestamp:headersData.timestamp,Memberemail:headersData.Memberemail, Apisignature:headersData.Apisignature,UserLanguage:headersData.UserLanguage,MerchantCode:headersData.MerchantCode.toString()}});
		return sendData(res,  response.data.data);
	} catch (e) {
		console.log(e)
		return sendResponse(res, StatusCode.INTERNAL_SERVER_ERROR, e);
	}
}