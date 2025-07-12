const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  location: String,
  skillsOffered: [String],
  skillsWanted: [String],
  availability: String,
  education: String,
  profileVisibility: { type: String, default: "public" },
  rating: { type: Number, default: 0 },
  reviews: [{ user: String, message: String }]
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
