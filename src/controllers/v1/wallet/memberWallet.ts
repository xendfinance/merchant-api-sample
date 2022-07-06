import { Request, response, Response } from "express";
import { sendData, sendResponse, StatusCode } from '../../../utils/index';
import axios from "axios";
import { setHeader } from "../../../utils/apiRequesthandler";
const dns = require('dns');
const baseUrl = process.env.baseUrl;
//create member whitelist wallet address 
export async function createMemberWhiteListWalletAddress(req: Request , res: Response) {
	try {
        const params: any = req.body;
		const { title, blockchainNetworkId, ethereumAddress } = params;
        let data = {title, blockchainNetworkId, ethereumAddress }

		const headersData =  await  setHeader(data, req.headers.memberemail)
		// make api axios call to create a member whitelist wallet address
	    const response = await axios.post(`${baseUrl}public/member/wallet/external-crypto-address`,data,{headers:{Authorization: headersData.Authorization, Authentication:headersData.Authentication,timestamp:headersData.timestamp,Memberemail:headersData.Memberemail, Apisignature:headersData.Apisignature,UserLanguage:headersData.UserLanguage,MerchantCode:headersData.MerchantCode.toString()}});
		return sendData(res,  response.data.data);
	} catch (e) {
		console.log(e)
		return sendResponse(res, StatusCode.INTERNAL_SERVER_ERROR, e);
	}
}

//get member wallet address balance
export async function getMemberWalletAddressAndBalance(req: Request , res: Response) {
	try {
		const headersData =  await  setHeader({}, req.headers.memberemail)
		// make api axios call to create a member wallet address
	    const response = await axios.get(`${baseUrl}public/member/wallet/balances`,{headers:{Authorization: headersData.Authorization, Authentication:headersData.Authentication,timestamp:headersData.timestamp,Memberemail:headersData.Memberemail, Apisignature:headersData.Apisignature,UserLanguage:headersData.UserLanguage,MerchantCode:headersData.MerchantCode.toString()}});
		return sendData(res,  response.data.data);
	} catch (e) {
		console.log(e)
		return sendResponse(res, StatusCode.INTERNAL_SERVER_ERROR, e);
	}
}
