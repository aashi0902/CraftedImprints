const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true, enum: ["admin", "vendor", "user"] },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  profilePicture: { type: String, default: "/uploads/default-profile.png" }, // Add profile picture field
});

UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await (enteredPassword === this.password);
};

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;
