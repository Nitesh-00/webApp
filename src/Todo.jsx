import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import './ToDo.css';

export default function Todo() {
  let [arr, setArr] = useState([{ task: "code", id: uuidv4(), isLiked: false }]);
  let [newTodo, setNewToDo] = useState("");
  function update() {
    setArr([...arr, { task: newTodo, id: uuidv4() }]);
    setNewToDo("");
  }

  let deleteToDo = (id) =>{
    setArr(arr.filter((todo) => todo.id !=id))
  }

  let newTask = (event) => {
    setNewToDo(event.target.value);
  };

  let comTask = (id) =>{
    setArr(arr.map((todo)=>{
      if(todo.id == id){
        return {
          ...todo , isLiked: true
        }
      }
      else{
        return todo
      }
    }))
  }
  

  return (
    <div>
      <input placeholder="Enter Task" value={newTodo} onChange={newTask} />
      <button onClick={update}>Add</button>
      <h1>Tasks Todo</h1>
      <hr />
      <ul>
        {arr.map((todo) => {
          return (
            <li key={todo.id}>
              <span  onClick={() => comTask(todo.id)} >{todo.isLiked ? <i className="fa-solid fa-circle"></i>  : <i className="fa-regular fa-circle"></i> }</span>
              &nbsp;&nbsp;&nbsp;
              <span style={todo.isLiked ? {textDecorationLine : "line-through"} : {}}>{todo.task}</span>
              <button onClick={() => deleteToDo(todo.id)}>delete</button>
            </li>
          );
        })}
      </ul>
      
    </div>
  );
}
