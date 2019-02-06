import React from "react";
import Square from "./Square";
import Header from "./Header";
import Grid from "./Grid";
import randNum from "../utils/randNum";

class App extends React.Component {
  state = {
    words: false, // this is the returned data
    wordArray: []
  };

  // do a fetch and pass query collected from the Grid to see if it is a word
  // resolved promise: match with word
  // set state of word to true if match
  // feedback of word > new colour of letters
  // rejected promise: not match with words
  // keep word state as false.

  render() {
    return (
      <div id="container">
        <Header />
        <Grid />
      </div>
    );
  }
}

export default App;
