/**
 * Created by Yavor on 16-Dec-16.
 */
/**
 * Created by Yavor on 16-Dec-16.
 */
const Mongoose = require('mongoose')
const Customer = Mongoose.model('Customer')
const singleVisit = Mongoose.model('SingleVisit')
const Transaction = Mongoose.model('Transaction')


module.exports = {
    initialView: (req, res) => {
        singleVisit.find({}).then(singleVisit => {
            res.render('pos/baseview', {singleVisit: singleVisit})
        })
    }
}