import { useState } from "react";

export default function Toggle() {
  const [isOn, setIsOn] = useState(false);
  const handleToggle = () => setIsOn((p) => !p);

  const buttonStyle = {
    padding: "10px 20px",
    borderRadius: "8px",
    border: "2px solid",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "all 0.3s ease",
    background: isOn ? "rgba(34, 197, 94, 0.2)" : "rgba(156, 163, 175, 0.2)",
    borderColor: isOn ? "rgba(34, 197, 94, 0.8)" : "rgba(156, 163, 175, 0.8)",
    color: isOn ? "rgba(34, 197, 94, 0.9)" : "rgba(107, 114, 128, 0.9)",
    boxShadow: isOn ? "0 0 10px rgba(34, 197, 94, 0.3)" : "0 0 5px rgba(156, 163, 175, 0.3)",
  };

  return (
    <button style={buttonStyle} onClick={handleToggle} isOn={isOn}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}
