import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="Header">
      <div className="layout-container">
        <div className="header-main">
          <div className="name">Hai Nguyen.</div>
          <div className="menu">
            <ul>
              <li>Work</li>
              <li>About</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
