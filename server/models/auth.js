import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  about: { type: [String] }, // This is an array of strings
  tags: { type: [String] },
  joinedOn: { type: Date, default: Date.now },
}); 

const User = mongoose.model("User", userSchema);

export default User;
