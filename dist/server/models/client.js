"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var clientSchema = new mongoose.Schema({
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
    services: String
    // appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }]
    // contacts: [{name: String, phone: Number, address: String}],
    // medicines: [{name: String, dose: String}],
});
var Client = mongoose.model('Client', clientSchema);
exports.default = Client;
//# sourceMappingURL=client.js.map