import { NextFunction, Request, Response } from "express";

const deviceWare = async (
	req: Request & { device: any },
	res: Response,
	next: NextFunction
) => {

	let deviceDetails = {
		type: req.headers['device-type'],
		serial: req.headers['device-serial'],
		build: req.headers['build-number'],
		description: req.headers['device-description'],
		country: req.headers['device-country']
	}

	req.device = deviceDetails;

	next();
}

export default deviceWare;
