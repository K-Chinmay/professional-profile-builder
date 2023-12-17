const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placementSchema = new Schema({
  Company:String,
  Package:Number,
  Count: Number,
  SrNo: Number,
});

const Data = mongoose.model('Data', placementSchema);

module.exports = Data;