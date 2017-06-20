/**
 * Created by Yavor on 13-Dec-16.
 */
/**
 * Created by Yavor on 13-Dec-16.
 */
const mongoose = require('mongoose');
const User = mongoose.model('User');

let customerSchema;
customerSchema = mongoose.Schema(
    {
        companyId: {type: String, required: true},
        userId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        code:{type: String, required: false},
        email: {type: String, required: true, unique: true},
        telephone: {type: String, required: false},
        address: {type: String, required: false},
        pin: {type: String, required: false},
    }
);

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;



