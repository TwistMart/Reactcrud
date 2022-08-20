import React from 'react';
import './App.css';
import {useState} from 'react';


function App() {
  const [todoList,setTodoList]= useState([]);
  const[newTask, setNewTask]=useState("");
  
  const handleChange= (event) =>{
    setNewTask(event.target.value);
  };

  const AddTask=() =>{
    const newTodoList=[...todoList,newTask];
    setTodoList(newTodoList);

  };

  const DeleteTask=(taskName) => {
    const newTodoList=todoList.filter((task) =>{
    return task !==taskName

      // if(task===taskName){
      //   return false;
      // }else {
      //   return true;
      // }
    
    });
  
  // const newTodoList=todoList.filter((task) =>task !==taskName
  // )

    setTodoList(newTodoList);
  };

  return (
    <div className="App">
    <div className="AddTasks">

    <input onChange={handleChange}/>

    <button onClick={AddTask}> Add Task</button>
    </div> 

    <div className="lists"></div>  
    {todoList.map((task) => {
      return <div>
      <h1>{task}</h1> 
      <button onClick={() => DeleteTask(task)}> x </button>
      </div>;
    }
    )}
    
     
    </div>
  );
}

export default App;
