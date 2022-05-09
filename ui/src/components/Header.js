import React from "react";

const Header = () => {
  return (
    <header>
      <div className="header-menu">
        <div class="container" onclick="myFunction(this)">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </div>

      <div className="header-stats">
        <i class="fa fa-bar-chart"></i>{" "}
      </div>
      <div className="header-settings">
        <i class="fa fa-gear"></i>
      </div>

      <div className="header-title"> Wordle </div>
    </header>
  );
};

export default Header;
