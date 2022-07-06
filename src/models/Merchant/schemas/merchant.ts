import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId;
export interface IMerchant {
	email: any;
	kycGoogleDriveLink:any;
	userId:any;
	clientSecret:any;
	clientToken: any;
	lastUpdatedByMerchantId: any;
	status:any;
}

const schema: IMerchant = {
	email: {
		type: String,
		default: null
	},
	kycGoogleDriveLink: {
		type: String,
		default: null
	},
	userId: {
		type: String,
		default: null
	},
	clientSecret: {
		type: String,
		default: null
	},
	clientToken: {
		type: String,
		default: null
	},
	lastUpdatedByMerchantId: {
		type: String,
		default: null
	},
	status:{
		type: String,
		default: null
	},
};

export default schema;
