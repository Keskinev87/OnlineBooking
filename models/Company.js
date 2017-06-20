/**
 * Created by Yavor on 28-May-17.
 */
const mongoose = require('mongoose');


let companySchema = mongoose.Schema (
    {
        name: {type: String, required: true},
        location: {type: String, required: true},
        currency: {type: String, required: true},
        vatNumber: {type: String, required: false},
        tax: {type: Number, required: false},
        pricesDisplay: {type: String, required: true, default: "taxIncluded"},
        address: {type: String, required: false},
        businessType: {type: String, required: false},
        logo: {type: String, required: false},
        users: {type: Array, required: false},
        instructors: {type: Array, required: false}
    }
)

const Company = mongoose.model('Company', companySchema);

module.exports = Company;