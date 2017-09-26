import * as mongoose from 'mongoose';

const carerSchema = new mongoose.Schema({
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
});

const Carer = mongoose.model('Carer', carerSchema);

export default Carer;
