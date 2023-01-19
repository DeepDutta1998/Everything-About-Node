const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'category',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

module.exports = new mongoose.model('product', productSchema)
