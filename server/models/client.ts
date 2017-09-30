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
  address: String,
  userName: String,
  services: String,
  // contacts: [{name: String, phone: Number, address: String}],
  // medicines: [{name: String, dose: String}],
});

const Client = mongoose.model('Client', clientSchema);

export default Client;
