import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId;
export interface ISubUsers {
	email: any;
	userId:any;
	countryCode:any;
	phoneNumber: any;
	fullName: any;
	ghostUserEmail:any;
	ghostUserIdentifier: any;
	ghostUserMerchantId: any;
}

const schema: ISubUsers = {
	email: {
		type: String,
		default: null
	},
	userId: {
		type: String,
		default: null
	},
	countryCode: {
		type: String,
		default: null
	},
	phoneNumber: {
		type: String,
		default: null
	},
	fullName:{
		type: String,
		default: null
	},
	ghostUserEmail:{
		type: String,
		default: null
	},
	ghostUserIdentifier:{
		type: String,
		default: null
	},
	ghostUserMerchantId:{
		type: String,
		default: null
	},
};

export default schema;
