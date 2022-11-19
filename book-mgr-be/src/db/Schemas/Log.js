const mongoose = require('mongoose')
const { getMeta, preSave } = require('./helpers')
const LogSchema = new mongoose.Schema({
  user: {
    account: String,
    id:String,
  },
  request: {
    methods: String,
    url: String,
    responseBody: String,
    status:Number
  },
  startTime: Number,
  endTime:Number,
  meta: getMeta(),
})
LogSchema.pre('save', preSave)

mongoose.model('Log', LogSchema)
