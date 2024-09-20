const mongoose = require("mongoose");

const ContactMessageSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const ContactMessageModel = mongoose.model(
  "contactMessage",
  ContactMessageSchema
);
module.exports = ContactMessageModel;
