import React, { Component } from "react";
import ReactDOM from "react-dom";

class VisibilityToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
  }

  toggleVisibility() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle App</h1>
        <button onClick={this.toggleVisibility}>
          {this.state.visibilty ? "Hide Details" : "Show Details"}
        </button>

        {this.state.visibility && (
          <p> These are the details you can see now! </p>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
