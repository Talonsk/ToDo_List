import React from "react";
import axios from "axios";

const ToDoItem = (props) => {

  let task =  React.createRef();

  const delData = (elem) =>{
    console.log(elem);
    elem.current.remove();
  }

  return (
    <div ref={task} className="ToDoItem">
      <div><span>{props.id} </span>{props.task}</div>
      <button onClick={delData.bind(null, task)}>&times;</button>
    </div>
  );
};

export default ToDoItem;
