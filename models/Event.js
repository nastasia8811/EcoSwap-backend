const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EventSchema = new Schema(
    {

        title: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        img: {
            type: String
        },
        city: {
            type: String,
            required:true
        },
        description:{
            type: String,
            required:true
        },
        location: {
            type: String,
            required:true
        },
        available:{
            type: Number,
            required:false
        },
        bookedSeats:
        //масив id
            [mongoose.Schema.Types.ObjectId],
        customer_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customer', // Посилання на модель Customer
            required: false,
        },
    },
);


module.exports = Event = mongoose.model("Event", EventSchema);