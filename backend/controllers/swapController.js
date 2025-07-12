const Swap = require("../models/Swap");

exports.requestSwap = async (req, res) => {
  try {
    const { toUserId, skillOffered, skillWanted, message } = req.body;
    const newSwap = new Swap({
      fromUser: req.user.id,
      toUser: toUserId,
      skillOffered,
      skillWanted,
      message
    });
    await newSwap.save();
    res.status(201).json({ message: "Swap request sent." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.respondToSwap = async (req, res) => {
  try {
    const { swapId, status } = req.body;
    const updated = await Swap.findByIdAndUpdate(swapId, { status }, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserSwaps = async (req, res) => {
  try {
    const swaps = await Swap.find({
      $or: [{ fromUser: req.user.id }, { toUser: req.user.id }]
    }).populate("fromUser toUser", "name skillsOffered skillsWanted");
    res.json(swaps);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
