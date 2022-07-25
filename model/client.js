// MONGOOSE
const mongoose = require('mongoose');
// USER SCHEMA
const clientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
      unique: true,
    },
    image: {
      type: String,
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

const ClientSchema = mongoose.model('ClientSchema', clientSchema);
module.exports = ClientSchema;