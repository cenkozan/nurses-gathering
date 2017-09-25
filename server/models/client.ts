import * as mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
  names: String,
  surname: String,
  phoneNumber: String,
  email: String,
  gender: {
    type: String,
    enum: ['M', 'F', 'O']
  },
  dob: Date,
  weight: Number,
  address: String,
  userName: String,
  conditions: String,
  additionalServices: String,
  contacts: [{name: String, phone: Number, address: String}],
  medicines: [{name: String, dose: String}]
});

const Client = mongoose.model('Client', clientSchema);

export default Client;
