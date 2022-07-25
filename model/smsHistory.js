// MONGOOSE
const mongoose = require('mongoose');
// USER SCHEMA
const smsHistorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const SMSHistorySchema = mongoose.model('SMSHistorySchema', smsHistorySchema);
module.exports = SMSHistorySchema;