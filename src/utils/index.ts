import axios from 'axios';
import { Response } from 'express';


export enum StatusCode {
	OK = 200,
	BAD_REQUEST = 400,
	UNAUTHORIZED = 401,
	FORBIDDEN = 403,
	NOT_FOUND = 404,
	INTERNAL_SERVER_ERROR = 500,
}

export const sendResponse = (res: Response, code: StatusCode, message: any) => {
	return res.status(code)
		.json({
			data: {
				message
			},
			status: code
		})
}


export const sendData = (res: Response, data) => {
	return res.status(StatusCode.OK)
		.json({
			data,
			status: StatusCode.OK
		})
}

