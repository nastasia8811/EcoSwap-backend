const Event = require("../models/Event");


exports.addEvent = (req, res, next) => {
    Event.findOne({ name: req.body.name }).then(event => {
        if (event) {
            return res
                .status(400)
                .json({ message: `Event with name "${event.name}" already exists` });
        } else {
            const initialQuery = _.cloneDeep(req.body);
            const newColor = new Event(queryCreator(initialQuery));

            newColor
                .save()
                .then(event => res.json(event))
                .catch(err =>
                    res.status(400).json({
                        message: `Error happened on server: "${err}" `
                    })
                );
        }
    });
};

exports.updateEvent = (req, res, next) => {
    Event.findOne({ _id: req.params.id })
        .then(event => {
            if (!event) {
                return res
                    .status(400)
                    .json({ message: `Event with _id "${req.params.id}" is not found.` });
            } else {

                 Event.findByIdAndUpdate(
                    req.params.eventId,
                    req.body,
                    { new: true }
                 )
                    .then(color => res.json(event))
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
