'use strict';

import * as mongoose from 'mongoose';

const AppointmentSchema = new mongoose.Schema({
  title: String,
  start: String,
  end: String,
  dow: [],
});

const Appointment = mongoose.model('Appointment', AppointmentSchema);

export default Appointment;
