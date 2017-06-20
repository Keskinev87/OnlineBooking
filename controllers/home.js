const Mongoose = require('mongoose')
const Transaction = Mongoose.model('Transaction')

module.exports = {
  index: (req, res) => {

          res.render('home/index');

  }
};