import { Document, model, Schema } from "mongoose";
import { IUser } from "../types/user.types";

type UserDocument = IUser & Document;

const UserSchema = new Schema<UserDocument>(
  {
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const User = model<UserDocument>("users", UserSchema);
export default User;
