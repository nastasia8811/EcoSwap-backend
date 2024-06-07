const express = require("express");
const router = express.Router();

const {
    addEvent,
    deleteEvent,
    updateEvent,
    getEvents,
} = require("../controllers/event");

router.post("/", addEvent);
router.delete("/:id", deleteEvent);
router.put("/:id", updateEvent);
router.get("/", getEvents)

module.exports = router;
