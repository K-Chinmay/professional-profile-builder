import mongoose from 'mongoose';

const placementCsvSchema = mongoose.Schema({
  SerialNo: { type: String, required: true },
  StudentCode : { type: String, required: true },
  StudentName: { type: String, required: true },
  Company: { type: String, required: true },
  Package: { type: String, required: true },
  
});

const PlacementData= mongoose.model('PlacementData', placementCsvSchema);

module.exports = PlacementData;