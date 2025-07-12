const User = require("../models/User");

exports.getPublicUsers = async (req, res) => {
  try {
    const skill = req.query.skill;
    const users = await User.find({
      profileVisibility: "public",
      skillsOffered: { $regex: new RegExp(skill, "i") }
    }).select("-password");
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { location, skillsOffered, skillsWanted, availability, education, profileVisibility } = req.body;
    const updated = await User.findByIdAndUpdate(req.user.id, {
      location, skillsOffered, skillsWanted, availability, education, profileVisibility
    }, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
