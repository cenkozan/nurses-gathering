"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var carerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
    gender: {
        type: String,
        enum: ['M', 'F', 'O']
    },
    dob: Date,
    // appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }],
    addressLine1: String,
    addressLine2: String,
    city: String,
    postcode: String
});
var Carer = mongoose.model('Carer', carerSchema);
exports.default = Carer;
//# sourceMappingURL=carer.js.map