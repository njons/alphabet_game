import React from "react";
import PropTypes from "prop-types";
import Board from "./Board";

class Square extends React.Component {
  state = {
    active: null
  };

  toggle(position) {
    if (this.state.active === position) {
      this.setState({ active: null });
    } else {
      this.setState({ active: position });
    }
  }

  bgColour(position) {
    if (this.state.active === position) {
      return "#FF69B4";
    }
    return "";
  }

  render() {
    return (
      <div id="square">
        <p
          style={{ background: this.bgColour(this.props.id) }}
          onClick={() => {
            this.toggle(this.props.id);
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
