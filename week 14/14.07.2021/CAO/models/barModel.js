const mongoose = require(`mongoose`);

const barSchema = new mongoose.Schema(
  {
    img_url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    price_rating: {
      type: String,
      required: true,
    },
    overall_rating: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Bar = mongoose.model(`Bar`, barSchema);
module.exports = Bar;
