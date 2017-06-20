/**
 * Created by Yavor on 15-Dec-16.
 */
const Mongoose = require('mongoose');
const groupVisit = Mongoose.model('GroupVisit');
const Session = Mongoose.model('Session')


module.exports = {
    viewall: (req, res) => {
        let findId = req.user.companyId;
       groupVisit.find({companyId : findId}).then(groupVisit => {
            res.render('groupVisits/viewall', {groupVisit: groupVisit})
        })
    },
    createGet: (req,res) => {
        if (!req.isAuthenticated()){
            let returnUrl = '/groupVisits/create';
            req.session.returnUrl = returnUrl;

            res.redirect('/user/login');
            return;
        }

        res.render('groupVisits/create');
    },
    createPost: (req,res) => {
        if(!req.isAuthenticated()) {
            let returnUrl = '/groupVisits/create';
            req.session.returnUrl = returnUrl;

            res.redirect('/user/login');
            return;
        }

        let groupVisitArgs = req.body;
        groupVisitArgs.userId = req.user.id;
        groupVisitArgs.companyId = req.user.companyId;
        groupVisitArgs.priceType = true;



      let errorMsg = '';
        if (groupVisitArgs.name == ''){
            errorMsg = 'Please enter a Name!';
        } else if (groupVisitArgs.duration == ''){
            errorMsg = 'Please enter Duration!';
        }else if (groupVisitArgs.duration == "" || isNaN(groupVisitArgs.duration)){
            errorMsg = 'Please enter a number in minutes!'
        }else if (groupVisitArgs.price == ""){
            errorMsg = 'Please enter a price!';
        }

        if (errorMsg) {
            res.send(errorMsg)
        }
        else {
            Session.createRecurring(groupVisitArgs)
            groupVisit.create(groupVisitArgs).then(res.send("success"))
            console.log("saved")
        }

    },
    details: (res, req) => {
        if(!req.isAuthenticated()) {
            let returnUrl = '/groupVisits/details';
            req.session.returnUrl = returnUrl;

            res.redirect('/user/login');
            return;
        }

        groupVisit.findById(req.params.id).then(groupVisit => {
            res.render('groupVisits/details', {groupVisit: groupVisit})
        })
    }
};