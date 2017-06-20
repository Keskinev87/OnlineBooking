/**
 * Created by Yavor on 27-May-17.
 */
const Mongoose = require('mongoose')
const Session = Mongoose.model('Session')


module.exports = {
    viewAll: (req, res) => {
        let findId = req.user.companyId;
        Session.find({companyId: findId}).then(sessions => {
            res.render('schedule/viewAll', {sessions: sessions})
        })
    },
    retrieveEvents: (req, res) => {
        let findId = req.user.companyId;
        Session.find({companyId: findId}).then(sessions => {
            res.json(sessions)
        })
    },
    test: (req, res) => {
        res.render('schedule/test')
    }
}