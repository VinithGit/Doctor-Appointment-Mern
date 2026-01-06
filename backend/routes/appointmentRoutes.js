const express = require("express");
const Appointment = require("../models/Appointment");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

/* Book Appointment */
router.post("/book", authMiddleware, async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.json({ message: "Appointment booked successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/* Get appointments for doctor */
router.get("/doctor/:id", authMiddleware, async (req, res) => {
  try {
    const appointments = await Appointment.find({ doctorId: req.params.id })
      .populate("patientId", "name email");
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* Get appointments for patient */
router.get("/patient/:id", authMiddleware, async (req, res) => {
  try {
    const appointments = await Appointment.find({ patientId: req.params.id })
      .populate("doctorId", "name specialization");
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
