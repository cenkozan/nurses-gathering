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
    services: String,
});
var Client = mongoose.model('Client', clientSchema);
exports.default = Client;
//# sourceMappingURL=client.js.map