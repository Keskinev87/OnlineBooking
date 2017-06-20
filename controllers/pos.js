/**
 * Created by Yavor on 16-Dec-16.
 */
/**
 * Created by Yavor on 16-Dec-16.
 */
const Mongoose = require('mongoose')
const Customer = Mongoose.model('Customer')
const groupVisit = Mongoose.model('GroupVisit')
const Transaction = Mongoose.model('Transaction')


module.exports = {
    initialView: (req, res) => {
        if (!req.isAuthenticated()){
            let returnUrl = '/pos/initialview';
            req.session.returnUrl = returnUrl;

            res.redirect('/user/login');
            return;
        }
        let findId = req.user.companyId;
        groupVisit.find({companyId : findId}).then(groupVisit => {
            res.render('pos/baseview', {groupVisit: groupVisit})
        })
    },
    reportTransaction: (req, res) => {
        if(!req.isAuthenticated()) {
            let returnUrl = '/pos/initialview';
            req.session.returnUrl = returnUrl;

            res.redirect('/user/login');
            return;
        }

        let transactionArgs = req.body;
        transactionArgs.userId = req.user.id;
        transactionArgs.companyId = req.user.companyId;

        Transaction.create(transactionArgs).then(res.redirect('/pos/initialview'))
    }
}