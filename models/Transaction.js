/**
 * Created by Yavor on 16-Dec-16.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema

let transactionSchema = mongoose.Schema(
    {
        type: {type: String, required: true},
        price: {type: Number, required: true},
        paymentType: {type: String, required: true},
        date: {type: String, required: true},
        discount: {type: String, required: false},
        customer: {type: Schema.Types.ObjectId, ref: 'Customer', required: false},
        user: {type: Schema.Types.ObjectId, ref: 'User', required: true}
    }
);

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;