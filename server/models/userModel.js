import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  address: String,
  role: {
    type: String,
    enum: ["user", "admin", "publisher"],
    default: "user",
  },
});
