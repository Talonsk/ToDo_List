import axios from "axios";
import React from "react";
import ToDoItem from "./component/ToDoItem";

let timeOut = 0;

function App() {

  let [todo, setTodo] = React.useState([]);

  React.useEffect(() => {
    let data = axios.get('http://localhost:8000/');
    data.then(res =>{
      // console.log(res.data);
      setTodo(res.data);
    })
  }, [])

  let input = React.createRef();

  const postData = () => {
    axios.post('http://localhost:8000/', 
      {
        id: null,
        task: input.current.value,
        isDone: 0
      });
  };

  return (
    <div className="wrapper">
      <h1>TO DO LIST</h1>
      <div className="addTask_wrapper">
        <input ref={input} placeholder="Write your task!"></input>
        <button onClick={postData}>Add Task</button>
      </div>
      { todo.map(elem =>{
        return <ToDoItem id={elem.id} task={elem.task}/>
      })}  
    </div>
  );
}

export default App;