import React from "react";
const Option = props => {
  return (
    <div>
      {props.option}
      <button
        onClick={e => {
          props.handleDeleteOption(props.option);
        }}
      >
        {" "}
        remove
      </button>
    </div>
  );
};

const User = props => {
  return (
    <div>
      <p>Name :{props.name}</p>
      <p> Age :{props.age}</p>
    </div>
  );
};

export default Option;
