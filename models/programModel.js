const mongoose = require("mongoose");

const programSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Program must have a name."],
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const Program = mongoose.model("Program", programSchema);

module.exports = Program;
