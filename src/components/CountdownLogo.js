import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/clock.svg";

const CountdownLogo = () => {
  return (
    <div className="clock-logo">
      <img src={Logo} style={{ height: 50, width: 50 }} alt="website logo" />
    </div>
  );
};

export default CountdownLogo;
