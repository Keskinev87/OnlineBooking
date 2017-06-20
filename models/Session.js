/**
 * Created by Yavor on 20-May-17.
 */
const mongoose = require('mongoose');
const User = mongoose.model('User');
const moment = require('moment');

let sessionSchema;
sessionSchema = mongoose.Schema(
    {
        companyId: {type:mongoose.Schema.Types.ObjectId, required: true, ref: 'Company'},
        userId: {type: String, required: true},
        title: {type: String, required: true},
        price: {type: Number, required: true},
        duration: {type: Number, required: true},
        color: {type: String, required: true, default: "#ECF0F1"},
        start: {type: Date, required: true},
        end: {type: Date, required: false},
        maximumCapacity: {type: Number, required: true},
        peopleAttending: {type: Array, required: false}
    }
);

sessionSchema.statics.createNew = function createNew (args, startDate, slot) {
    console.log(slot)
    let curSession = new Session
    let curHours = Number(slot.split(":")[0])
    let curMinutes = Number(slot.split(":")[1])
    curSession.companyId = args.companyId
    curSession.userId = args.userId
    curSession.title = args.name
    curSession.price = args.price
    curSession.duration = args.duration
    curSession.color = args.color
    curSession.date = startDate
    curSession.start = moment(startDate.hours(curHours).minutes(curMinutes))
    console.log(curSession.start)
    curSession.end = startDate.add(args.duration, 'minutes')
    curSession.maximumCapacity = args.maximumCapacity
    Session.create(curSession).then(console.log("success"))
}

sessionSchema.statics.createRecurring = function CreateRecurring(groupVisit) {

        let startDate = new moment(groupVisit.activityPeriodStart)
    console.log(startDate)
        let endDate = new moment(groupVisit.activityPeriodEnd)


        while (startDate <= endDate) {
            let b = startDate.format('dddd')
                if (groupVisit.bookingSlots[b].active == "true") {
                    for (let slot of  groupVisit.bookingSlots[b].slots ) {
                        Session.createNew(groupVisit, startDate, slot)
                    }

                }
                startDate.add(1, 'days')
        }

}




const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;