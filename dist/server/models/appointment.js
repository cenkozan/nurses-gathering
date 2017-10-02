'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var AppointmentSchema = new mongoose.Schema({
    title: String,
    start: String,
    end: String,
    dow: [],
});
var Appointment = mongoose.model('Appointment', AppointmentSchema);
exports.default = Appointment;
//# sourceMappingURL=appointment.js.map