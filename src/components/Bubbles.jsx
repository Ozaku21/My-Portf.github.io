import React from "react";
import "./BubblesStyle.css";

function Bubbles({ activeBubble }) {
  return (
    <div className="bubbles">
      <div
        className={`green ${activeBubble === "green" ? "active" : ""}`}
      ></div>
      <div
        className={`yellow ${activeBubble === "yellow" ? "active" : ""}`}
      ></div>
      <div className={`pink ${activeBubble === "pink" ? "active" : ""}`}></div>
      <div
        className={`purple ${activeBubble === "purple" ? "active" : ""}`}
      ></div>
    </div>
  );
}

export default Bubbles;
