const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const WorkingHoursSchema = new Schema({
  hours: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = WorkingHours = mongoose.model("workingHours", WorkingHoursSchema);