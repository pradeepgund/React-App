import React from "react";
import Option from "./Option";
const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remomve All</button>
      {props.options && <p>There are no options available </p>}
      {props.options.map(op => (
        <Option
          key={op}
          option={op}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

export default Options;
