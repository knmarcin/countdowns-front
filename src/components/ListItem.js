import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const ListItem = ({ countdown }) => {
  const date = new Date(countdown.date);
  const today = new Date();
  return (
    <Link to={`/countdowns/${countdown.id}`}>
      <div className="countdowns-list-item">
        <Fade delay={10}>
          <h3> {countdown.title}</h3>
        </Fade>
        <Fade delay={10}>
          <div className="days-left">
            <span> {countdown.date}</span>
          </div>
          <div className="days-left">
            <span>
              {Math.floor(Math.abs(today - date) / (1000 * 3600 * 24))} days
              left
            </span>
          </div>
        </Fade>
      </div>
    </Link>
  );
};

export default ListItem;
