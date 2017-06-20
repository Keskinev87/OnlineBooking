/**
 * Created by Yavor on 28-May-17.
 */
const mongoose = require('mongoose');


let onlineBookingSchema = mongoose.Schema (
    {
        companyID: {type: String, required: true},
        onlineBookingSettings: {
            workingHours: {
                start: {type: String, required: false, default: "09:00"},
                end: {type: String, required: false, default: "22:00"}
            },

        }
    }
)

const OnlineBooking = mongoose.model('OnlineBooking', onlineBookingSchema);

module.exports = OnlineBooking;