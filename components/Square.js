import React from "react";
import PropTypes from "prop-types";
import Grid from "./Grid";

class Square extends React.Component {
  state = {
    active: false,
    completed: false,
    wordArray: []
  };

  collectData(char) {
    // console.log("this is the id: ", id);
    console.log("this is the letter: ", char);
    let word = [];
    word.push(char);
    console.log("this is the word: ", word);
    this.setState(
      prevState => ({
        wordArray: prevState.wordArray.concat(char)
      }),
      () => {
        console.log("this is word array in collectData:", this.state.wordArray);
        console.log("this is the letter: ", char);
      }
    );

    if (this.state.active === id) {
      this.setState({ active: false });
    } else {
      this.setState({ active: id });
    }
  }

  // write function to setState complete to true of provise is resolved

  // bgColour(id) {
  //   if (this.state.active === id) {
  //     return "#FF69B4";
  //   } else if (this.state.complete === id) {
  //     return "#EEE";
  //   }
  //   return "";
  // }

  render() {
    return (
      <div id="square">
        <p
          // style={{ background: this.bgColour(this.props.id) }}
          onClick={() => {
            this.collectData(this.props.value.char);
          }}
          className="text"
        >
          {this.props.value.char}
        </p>
      </div>
    );
  }
}

export default Square;
