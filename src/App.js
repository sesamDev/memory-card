import "./styles/App.css";

import React, { useEffect } from "react";

import Gameboard from "./components/Gameboard";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Gameboard />
    </div>
  );
};

export default App;
