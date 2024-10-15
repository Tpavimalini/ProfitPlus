const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  billNumber: { type: String, required: true },
  shopName: { type: String, required: true },
  balance: { type: Number, required: true },
  addAmount: { type: Number, required: true },
  settled: { type: Boolean, required: true },
  order: { type: String, required: true },
  remark: { type: String, required: true }
});

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;
