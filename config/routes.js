const userController = require('./../controllers/user');
const homeController = require('./../controllers/home');
const customerController = require('./../controllers/customer')
const groupVisitsController = require('./../controllers/groupVisit')
const posController = require('./../controllers/pos')
const scheduleController = require('./../controllers/schedule')
const onlineBookingController = require('./../controllers/onlineBooking')
const companyController = require('./../controllers/company')


module.exports = (app) => {
    app.get('/', homeController.index);

    app.get('/onlinebooking/:id', onlineBookingController.initialize)
    app.get('/user/register', userController.registerGet);
    app.post('/user/register', userController.registerPost);

    app.get('/user/login', userController.loginGet);
    app.get('/company/create', companyController.createGet);
    app.post('/company/create', companyController.createPost);
    app.post('/user/login', userController.loginPost);

    app.get('/user/logout', userController.logout)
    app.get('/customers/find', customerController.findGet)
    app.get('/customers/all', customerController.viewall)
    app.get('/customers/create', customerController.createGet)
    app.post('/customers/create', customerController.createPost)
    app.get('/customers/details/:id', customerController.details)
    app.get('/groupVisits/all', groupVisitsController.viewall)
    app.get('/groupVisits/create', groupVisitsController.createGet)
    app.post('/groupVisits/create', groupVisitsController.createPost)
    app.get('/pos/initialview', posController.initialView)
    app.post('/pos/sell', posController.reportTransaction)
    app.get('/user/details/:id', userController.details)
    app.get('/schedule/viewAll', scheduleController.viewAll)
    app.get('/schedule/retrieveEvents', scheduleController.retrieveEvents)
    app.get('/schedule/test', scheduleController.test)
    app.get('/bookingApp/:id')
};
