const express = require("express");
const router = express.Router();

const {
    addEvent,
    deleteEvent,
    updateEvent,
    getEvents,
    findById
} = require("../controllers/event");

router.post("/", addEvent);
router.delete("/:id", deleteEvent);
router.put("/:id", updateEvent);
router.get("/", getEvents)
router.get("/:id",findById)

module.exports = router;
