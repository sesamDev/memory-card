import "../styles/Header.css";

import React from "react";
import Score from "./Score";

const Header = () => {
  return (
    <div className="App-header">
      <h1>Game Title</h1>
      <div>Logo</div>
      <Score />
    </div>
  );
};

export default Header;
