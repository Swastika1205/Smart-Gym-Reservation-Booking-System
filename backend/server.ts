import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("FitSlot API is running");
});

app.get("/api/slots", (req, res) => {
  const slots = [
    { id: 1, time: "6:00 AM - 7:00 AM", available: true },
    { id: 2, time: "7:00 AM - 8:00 AM", available: false },
    { id: 3, time: "8:00 AM - 9:00 AM", available: true }
  ];

  res.json(slots);
});

app.post("/api/book", (req, res) => {
  const { userName, slotId } = req.body;

  if (!userName || !slotId) {
    return res.status(400).json({
      message: "Missing required booking details"
    });
  }

  res.status(201).json({
    message: "Slot booked successfully",
    booking: {
      userName,
      slotId
    }
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
