import "./App.css";
import Board from "./components/board";
import { useState } from "react";

const App = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);

  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div> status </div>
        <div> TODO </div>
      </div>
    </div>
  );
};

export default App;
