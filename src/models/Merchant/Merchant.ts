import mongoose from "mongoose";
import MerchantSchema, { IMerchant } from "./schemas/Merchant";
const Schema = mongoose.Schema;

const schema = new Schema<IMerchant>(MerchantSchema, { timestamps: true });

export default mongoose.model("Merchant", schema);

