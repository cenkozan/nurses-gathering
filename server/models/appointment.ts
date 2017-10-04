'use strict';

import * as mongoose from 'mongoose';

const AppointmentSchema = new mongoose.Schema({
  title: String,
  start: String,
  end: String,
  dow: String,
  client: String,
  carer: String
});

const Appointment = mongoose.model('Appointment', AppointmentSchema);

export default Appointment;
