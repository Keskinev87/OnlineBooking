/**
 * Created by Yavor on 28-May-17.
 */
const mongoose = require('mongoose');
const OnlineBooking = mongoose.model('OnlineBooking')
const Session = mongoose.model('Session')
const User = mongoose.model('User')


let companySchema = mongoose.Schema (
    {
        name: {type: String, required: true},
        email: {type: String, required: true},
        location: {type: String, required: false},
        currency: {type: String, required: false},
        vatNumber: {type: String, required: false},
        tax: {type: Number, required: false},
        pricesDisplay: {type: String, required: false, default: "taxIncluded"},
        address: {type: String, required: false},
        businessType: {type: String, required: false},
        logo: {type: String, required: false},
        users: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: 'User'}],
        instructors: {type: Array, required: false},
        paymentTypes: {type: Array, required: false},
        onlineBooking: {type: mongoose.Schema.Types.ObjectId, required: false, ref: 'OnlineBooking'},
        sessions: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: 'Session'}]
    }
)

const Company = mongoose.model('Company', companySchema);

module.exports = Company;