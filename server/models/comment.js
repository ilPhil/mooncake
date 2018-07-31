'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentsSchema = new Schema({
  url:String,
  // Referncing user model, mongoose populate documentation guide
  comment: String,
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  date: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Comments', commentsSchema)
