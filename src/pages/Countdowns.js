import React, { useState, useEffect } from "react";
import ListItem from "../components/ListItem";

const Countdowns = () => {
  let [countdowns, setCountdowns] = useState([]);

  useEffect(() => {
    getCountdowns();
  }, []);

  let getCountdowns = async () => {
    let response = await fetch("http://127.0.0.1:8000");
    let data = await response.json();
    setCountdowns(data);
  };

  return (
    <div className="countdowns">
      <div className="countdowns-header">
        <h2 className="countdowns-title">Countdowns</h2>
        <p className="countdowns-count">{countdowns.length}</p>
      </div>
      <div className="countdowns-list">
        {countdowns.map((countdowns) => (
          <ListItem countdown={countdowns} />
        ))}
      </div>
    </div>
  );
};

export default Countdowns;
