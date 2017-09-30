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
    weight: Number,
    address: String,
    userName: String,
    conditions: String,
    additionalServices: String,
    contacts: String,
    medicines: String
    // contacts: [{name: String, phone: Number, address: String}],
    // medicines: [{name: String, dose: String}],
});
var Client = mongoose.model('Client', clientSchema);
exports.default = Client;
//# sourceMappingURL=client.js.map