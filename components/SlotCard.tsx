import React from "react";

type SlotCardProps = {
  time: string;
  available: boolean;
};

const SlotCard = ({
  time,
  available
}: SlotCardProps) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        marginBottom: "10px",
        borderRadius: "8px"
      }}
    >
      <h3>{time}</h3>

      <p>
        Status: {available ? "Available" : "Booked"}
      </p>

      <button
        disabled={!available}
        style={{
          padding: "10px 15px",
          cursor: available
            ? "pointer"
            : "not-allowed"
        }}
      >
        Book Slot
      </button>
    </div>
  );
};

export default SlotCard;
