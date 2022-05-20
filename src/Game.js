import React from "react";
import { useState } from "react";

export default function Game() {
  const [playerValeu, setPlayerValue] = useState("x");
  const [newObj, setNewObj] = useState(Array(9).fill(""));

  // checked winner
  const checkWinner = () => {
    const array = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 5, 8],
    ];

    for (let i = 0; i < array.length; i++) {
      const [a, b, c] = array[i];
      if (newObj[a] && newObj[a] === newObj[b] && newObj[b] === newObj[c]) {
        console.log(newObj[a]);
        return newObj[a];
      }
    }
    return null;
  };

  const handleClick = (num) => {
    // double click
    if (newObj[num] !== "") {
      alert("Hey not allowed!");
      return;
    }

    // stop game
    const win = checkWinner(newObj);
    if (win || newObj.array) {
      return;
    }

    // player value checked
    if (playerValeu === "x") {
      newObj[num] = "x";
      setPlayerValue("o");
    } else {
      newObj[num] = "o";
      setPlayerValue("x");
    }
    setNewObj(newObj);
    checkWinner(newObj);
  };

  const win = checkWinner(newObj);
  let info;
  if (win || newObj.array) {
    info = win + " - is the win!";
  }

  const Replay = () => {
    setNewObj(Array(9).fill(""));
  };

  const checkValue = (newObj) => {
    if (newObj === "x") return "btnX";
    else if (newObj === "o") return "btnO";
  };
  const Button = ({ num }) => {
    return (
      <button
        onClick={() => handleClick(num)}
        className={`btn ${checkValue(newObj[num])}`}
      >
        {newObj[num]}
      </button>
    );
  };

  return (
    <div className="game">
      <div className="container">
        <div className="row">
          <div className="box">
            <Button num={0} />
            <Button num={1} />
            <Button num={2} />
          </div>
          <div className="box">
            <Button num={3} />
            <Button num={4} />
            <Button num={5} />
          </div>
          <div className="box">
            <Button num={6} />
            <Button num={7} />
            <Button num={8} />
          </div>
          {<p className="text">{info}</p>}
        </div>
        <button className="btnReplay" onClick={() => Replay()}>
          Refresh
        </button>
      </div>
    </div>
  );
}
