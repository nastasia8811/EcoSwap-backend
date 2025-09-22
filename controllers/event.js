const Event = require("../models/Event");


exports.addEvent = (req, res, next) => {

            const newEvent = new Event({
                ...req.body,
                //customer_id: req.user._id, // ID користувача з JWT токену
            });

            newEvent
                .save()
                .then(event => res.json(event))
                .catch(err =>
                    res.status(400).json({
                        message: `Error happened on server: "${err}" `
                    })
                );


};

exports.findById = (req, res, next) =>{
    Event.findOne({ _id: req.params.id })
        .then(event => {
            if (!event) {
                return res
                    .status(400)
                    .json({message: `Event with _id "${req.params.id}" is not found.`});
            } else {
                res.json(event)
            }
        })
        }

exports.updateEvent = (req, res, next) => {
    Event.findOne({ _id: req.params.id })
        .then(event => {
            if (!event) {
                return res
                    .status(400)
                    .json({ message: `Event with _id "${req.params.id}" is not found.` });
            } else {

                 Event.findByIdAndUpdate(
                    req.params.id,
                    req.body,
                    { new: true }
                 )
                    .then(event => res.json(event))
                    .catch(err =>
                        res.status(400).json({
                            message: `Error happened on server: "${err}" `
                        })
                    );
            }
        })
        .catch(err =>
            res.status(400).json({
                message: `Error happened on server: "${err}" `
            })
        );
};

exports.deleteEvent = (req, res, next) => {
    Event.findOne({ _id: req.params.id }).then(async event => {
        if (!event) {
            return res
                .status(400)
                .json({ message: `Event with _id "${req.params.id}" is not found.` });
        } else {
            Event.deleteOne({ _id: req.params.id })
                .then(deletedCount =>
                    res.status(200).json({
                        message: `Event with name "${event.name}" is successfully deletes from DB `
                    })
                )
                .catch(err =>
                    res.status(400).json({
                        message: `Error happened on server: "${err}" `
                    })
                );
        }
    });
};


exports.getEvents = (req, res, next) => {
    Event.find()
        .then(events => res.json(events))
        .catch(err =>
            res.status(400).json({
                message: `Error happened on server: "${err}" `
            })
        );
};

exports.bookOrCancelEvent = (req, res, next) => {
    const eventId = req.params.eventId;
    const customerId = req.params.customerId;

    Event.findById(eventId)
        .then((event )=> {
           const customerIsBooked = event.bookedSeats.includes(customerId)

            if(customerIsBooked) {
                event.bookedSeats.pull(customerId);
                event.available = event.available+1;
            } else {
                event.bookedSeats.push(customerId)
                event.available = event.available-1;

            } event.save()
                    .then((data) => {
                        return res.json(data);
                    })
        }
        )
        .catch(err =>
            res.status(400).json({
                message: `Error happened on server: "${err}" `
            })
        );
}
