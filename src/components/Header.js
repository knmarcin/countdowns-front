import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const Header = () => {
  return (
    <div className="app-header">
      <Fade delay={200}>
        <h2 className="header-text">&#128336;</h2>
      </Fade>
      <Fade delay={100}>
        <Slide left delay={800}>
          <h2 className="header-text">Countdown.APP</h2>
        </Slide>
      </Fade>
    </div>
  );
};

export default Header;
