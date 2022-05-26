import React from "react";

function ToDo(props) {
  return (
    <div
      style={{
        display: "flex",
        border: 5,
        justifyContent: "center",
      }}
    >
      <div
        onClick={props.changeComplete}
        style={{
          textDecoration: props.todo.complete ? "line-through" : "",
        }}
      >
        {props.todo.text}
      </div>
      <button onClick={props.delete}>x</button>
    </div>
  );
}

export default ToDo;
