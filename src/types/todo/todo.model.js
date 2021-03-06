"use strict"

const mongoose = require("mongoose")

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
})

module.exports = mongoose.model("todo", todoSchema)
