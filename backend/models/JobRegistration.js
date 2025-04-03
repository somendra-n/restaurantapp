const mongoose = require('mongoose');

const jobRegistrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  age: { type: Number, required: true },
  role: { type: String, required: true },
  branchLocation: { type: String, required: true },
  dateSubmitted: { type: Date, default: Date.now },
});

const JobRegistration = mongoose.model('JobRegistration', jobRegistrationSchema);

module.exports = JobRegistration;
