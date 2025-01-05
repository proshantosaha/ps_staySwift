import mongoose, { Schema } from "mongoose";
import { ObjectId } from "mongodb";

const userSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  image: {
    required: false,
    type: String,
  },
});

export const userModel =
  mongoose.models.users ?? mongoose.model("users", userSchema);
