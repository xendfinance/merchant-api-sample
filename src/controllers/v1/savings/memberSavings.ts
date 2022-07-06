import { Request, response, Response } from "express";
import { sendData, sendResponse, StatusCode } from '../../../utils/index';
import axios from "axios";
import { setHeader } from "../../../utils/apiRequesthandler";
const dns = require('dns');
const baseUrl = process.env.baseUrl;
//create member fixed savings profile
export async function createMemberFixedSavingsProfile(req: Request , res: Response) {
	try {
        const params: any = req.body;
		const { title, depositAmount, currencyId , durationDays, } = params;
        let data = {title, depositAmount, currencyId, durationDays }

		const headersData =  await  setHeader(data, req.headers.memberemail)
		// make api axios call to create a member fixed savings profile
	    const response = await axios.post(`${baseUrl}public/member/savings/stable-currency/fixed`,data,{headers:{Authorization: headersData.Authorization, Authentication:headersData.Authentication,timestamp:headersData.timestamp,Memberemail:headersData.Memberemail, Apisignature:headersData.Apisignature,UserLanguage:headersData.UserLanguage,MerchantCode:headersData.MerchantCode.toString()}});
		return sendData(res,  response.data.data);
	} catch (e) {
		console.log(e)
		return sendResponse(res, StatusCode.INTERNAL_SERVER_ERROR, e);
	}
}