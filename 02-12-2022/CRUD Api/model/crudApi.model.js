const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CrudApiSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

module.exports = new mongoose.model('apidata', CrudApiSchema)
