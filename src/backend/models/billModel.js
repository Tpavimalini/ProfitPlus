const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
  billNumber: { type: String, required: true },
  shopName: { type: String, required: true },
  totalAmount: { type: Number, required: true },
  dueDate: { type: Date, required: true }
});

const Bill = mongoose.model('Bill', billSchema);

module.exports = Bill;
