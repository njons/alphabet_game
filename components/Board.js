import React from "react";
import Square from "./Square";
import Header from "./Header";
import randNum from "../utils/randNum";

class Board extends React.Component {
  state = {
    boardNumbers: this.createGrid(12, 9) // generates empty grid
  };

  createGrid(x, y) {
    // itereate over small grid 6 times
    let board = [];
    let id = 0;
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
        var char = chars[Math.floor(Math.random() * chars.length)];
        board.push({ char, displayed: false, id });
      }
    }

    // do all the jazz
    // board = this.addChar(board);
    // board = this.addId(board);
    console.log("this is the board filled with letters:", board);
    // console.log("this is the board filled with ids:", board);
    // board = this.validateRow(board, x, y);
    // let board = this.addNum(x, y);
    // console.log("this is the filled board:", board);
    // console.log("this is the validated board:", board);
    return board;
  }

  // addId(board) {
  //   return board.map((sq, i) => ({
  //     value: sq.value,
  //     displayed: sq.displayed,
  //     id: i
  //   }));
  // }

  validateRow() {
    // console.log("this is validateRow");
  }

  render() {
    return (
      <div id="container">
        <Header />
        <div id="board">
          {this.state.boardNumbers.map((square, i) => (
            <Square value={square} displayed="false" key={i} />
          ))}
        </div>
      </div>
    );
  }
}

export default Board;
