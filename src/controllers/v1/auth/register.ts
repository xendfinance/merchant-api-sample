import { Request, response, Response } from "express";
import { sendData, sendResponse, StatusCode } from '../../../utils/index';
import axios from "axios";
import SubUser from "../../../models/SubUser/SubUser";
import { setHeader } from "../../../utils/apiRequesthandler";
const baseUrl = process.env.baseUrl;

//register a user email and password to our sand box 
export async function MerchantSandboxRegistration(req: Request , res: Response) {
	try {
		const params: any = req.body;
		const { email, password } = params;
		// make api axios call to the sandbox api to register an account
	    const response = await axios.post(`${baseUrl}public/create/sandbox/account`,{email, password})
		return sendData(res, response.data);
	} catch (e) {
		return sendResponse(res, StatusCode.INTERNAL_SERVER_ERROR, e);
	}
}

//signup as a merchant with the email and password you used to register via the sandbox api above
export async function registerMerchant(req: Request , res: Response) {
	try {
		const params: any = req.body;
		const { email, password, kycGoogleDriveLink } = params;
		// make api axios call to the merchant register endpoint
	    const response = await axios.post(`${baseUrl}public/register`,{email, password, kycGoogleDriveLink});			
		return sendData(res, response.data.data);
	} catch (e) {
		console.log(e)
		return sendResponse(res, StatusCode.INTERNAL_SERVER_ERROR, e);
	}
}

//signup sub user by merchant
export async function signupSubUser(req: Request , res: Response) {
	try {
		const params: any = req.body;
		const { email, userId, countryCode, phoneNumber,fullName } = params;
		// make api axios call to the sub user account creation api
		let data = {email, userId, countryCode, phoneNumber,fullName }
		const headersData =  await  setHeader(data, req.headers.memberemail)
	     const response = await axios.post(`${baseUrl}public/me/sub-account/create`,data,{headers:{Authorization: headersData.Authorization, Authentication:headersData.Authentication,timestamp:headersData.timestamp,Memberemail:headersData.Memberemail, Apisignature:headersData.Apisignature,UserLanguage:headersData.UserLanguage,MerchantCode:headersData.MerchantCode.toString()}});
		return sendData(res, response.data);
	} catch (e) {
		console.log(e)
		return sendResponse(res, StatusCode.INTERNAL_SERVER_ERROR, e);
	}
}