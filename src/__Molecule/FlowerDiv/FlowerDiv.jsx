import React from "react";
import { useState, useEffect } from "react";
import "./FlowerDiv.scss";
import Flower from "../../assets/Images/flower.png";

function FlowerDiv() {
  const [date, setDate] = useState(GetCurrentDate());
  const [time, setTime] = useState(GetCurrentTime());

  function GetCurrentDate() {
    return new Date().toLocaleDateString("en-US", {
      day: "numeric",
      weekday: "short",
    });
  }

  function GetCurrentTime() {
    return new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(GetCurrentDate());
      setTime(GetCurrentTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="flower_div">
        <img src={Flower} alt="flower_image" />
        <h1 className="date">{date}</h1>
        <h1 className="time">{time}</h1>
      </div>
    </>
  );
}

export default FlowerDiv;
