/**
 * Created by Yavor on 03-Apr-17.
 */
const mongoose = require('mongoose');
let membershipSchema = mongoose.Schema(
    {
        username: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        retypePassword: {type: String, required: true},
        fullName: {type: String, required: true}
        /*role: To DO */
    }
);

const Membership = mongoose.model('Membership', membershipSchema);

module.exports = Membership;