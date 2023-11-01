import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  username: String,
  email: String,
  password: String,
  address: String,
  role: {
    type: String,
    enum: ["user", "admin", "publisher"],
    default: "user",
  },
});

userSchema.methods.withoutPassword = function () {
  let usr = this.toObject();
  delete usr.password;
  return usr;
};
export default mongoose.model("User", userSchema);
