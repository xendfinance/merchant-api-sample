import mongoose from "mongoose";
import SubUsersSchema, { ISubUsers } from "./schemas/subUser";
const Schema = mongoose.Schema;

const schema = new Schema<ISubUsers>(SubUsersSchema, { timestamps: true });

export default mongoose.model("SubUsers", schema);

