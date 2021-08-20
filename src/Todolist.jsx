import React from "react";

export const Todolist = (props) => {
  return (
    <>
      <div className="liststyle">
        <button className="delbtn"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          <i class="far fa-trash-alt"></i>
        </button>
        <li>{props.text}</li>
      </div>
    </>
  );
};
