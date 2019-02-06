import React from "react";
import Square from "./Square";
import Header from "./Header";
import randNum from "../utils/randNum";

class Grid extends React.Component {
  state = {
    boardLetters: this.fillGrid(10, 5) // generates empty grid
  };

  fillGrid(x, y) {
    // collect 108 numbers (corresponds with the number of squares set in css) in an array (grid) and iterate over the array to place one number across each square in the grid
    let grid = [];
    // let id = 0;
    const chars = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "X",
      "Y",
      "Z"
    ];

    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
        // random chars are selected by generating a random array index in the below code and pushing it into the array
        let char = chars[Math.floor(Math.random() * chars.length)];
        grid.push({ char });
      }
    }
    console.log("this is the grid filled with letters:", grid);
    return grid;
  }

  render() {
    return (
      <div id="grid">
        {this.state.boardLetters.map((square, i) => (
          <Square value={square} key={i} id={i} />
        ))}
      </div>
    );
  }
}

export default Grid;
