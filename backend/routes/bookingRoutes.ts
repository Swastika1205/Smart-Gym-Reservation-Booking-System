import express from "express";

const router = express.Router();

router.get("/slots", (req, res) => {
  const slots = [
    {
      id: 1,
      time: "6:00 AM - 7:00 AM",
      available: true
    },
    {
      id: 2,
      time: "7:00 AM - 8:00 AM",
      available: false
    }
  ];

  res.json(slots);
});

router.post("/book", (req, res) => {
  const { userName, slotId } = req.body;

  if (!userName || !slotId) {
    return res.status(400).json({
      message: "Invalid booking request"
    });
  }

  res.status(201).json({
    message: "Booking confirmed",
    booking: {
      userName,
      slotId
    }
  });
});

export default router;
