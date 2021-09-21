import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ countdown }) => {
  const date = new Date(countdown.date);
  const today = new Date();
  return (
    <Link to={`/countdowns/${countdown.id}`}>
      <div className="countdowns-list-item">
        <h3> {countdown.title}</h3>

        <div className="days-left">
          <span> {countdown.date}</span>
        </div>
        <div className="days-left">
          <span>
            {Math.floor(Math.abs(today - date) / (1000 * 3600 * 24))} days left
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ListItem;
