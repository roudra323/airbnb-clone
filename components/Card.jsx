import React from "react";

export default function Card() {
  return (
    <div className="card">
      <img
        src="../src/assets/image 12.png"
        alt="katie"
        className="card--image"
      />

      <div className="card--stats">
        <img src="../src/assets/Star.png" />
        <span>5.0</span>
        <span>(6) • </span>
        <span>USA</span>
      </div>
    </div>
  );
}
