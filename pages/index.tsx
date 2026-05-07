import React from "react";

const Home = () => {
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
    },
    {
      id: 3,
      time: "8:00 AM - 9:00 AM",
      available: true
    }
  ];

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial"
      }}
    >
      <h1>FitSlot Gym Reservation System</h1>

      <h2>Available Slots</h2>

      {slots.map((slot) => (
        <div
          key={slot.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "8px"
          }}
        >
          <h3>{slot.time}</h3>

          <p>
            Status:{" "}
            {slot.available ? "Available" : "Booked"}
          </p>

          <button
            disabled={!slot.available}
            style={{
              padding: "10px 15px",
              cursor: slot.available ? "pointer" : "not-allowed"
            }}
          >
            Book Slot
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
