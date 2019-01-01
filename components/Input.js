import React from "react";

class Input extends React.Component {
  // this needs to take on values
  render() {
    return (
      <div>
        <input id="text" />
      </div>
    );
  }
}

// add this to Square.js
<Input displayed={this.props.displayed} />;

export default Input;
