import React from "react";
const Action = props => {
  return (
    <div>
      <button onClick={props.handleMakeDecision} disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  );
};

export default Action;
