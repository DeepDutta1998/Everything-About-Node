const mongoose = require('mongoose')
const Schema = mongoose.Schema

const appSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    batch: {
      type: String,
      required: true,
    },
    class: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

module.exports = new mongoose.model('crudrecap', appSchema)
