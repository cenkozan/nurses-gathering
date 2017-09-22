import * as mongoose from 'mongoose';

const careGiverSchema = new mongoose.Schema({
  names: String,
  surname: String,
  gender: String,
  dob: Date,
  weight: Number,
  address: String,
  userName: String,
  conditions: String,
  additionalServices: String,
  contacts: [{name: String, phone: Number, address: String}],
  medicines: [{name: String, dose: String}]
});

const CareGiver = mongoose.model('CareGiver', careGiverSchema);

export default CareGiver;
