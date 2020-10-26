import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import { Button,Input } from 'semantic-ui-react'
import './App.css';
import Item from './Item'

function App() {
  
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  const [emptyError, setEmptyError] = useState(false)


  const handleClick = () => {
    if(todo.length == 0){
      setEmptyError(true)
    }else{
      todos.push(todo)
      setTodos(todos)
      setTodo('')
    }
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
    if(e.target.value.length > 0){
      setEmptyError(false)
    }
  }

  const handleDelete = (e) => {
    e.stopPropagation()
    setTodos(todos.filter((item, index) => index.toString() !== e.target.parentNode.id))
  }



  return (
    <div className="App">
      {todos.length}
       <div className="inputArea"> <input class="form-control" onChange={handleChange} value={todo} type="text" placeholder="Enter todo"></input> <button onClick={handleClick} type="button" class="btn btn-dark">Add todo</button></div>
       {!emptyError ? '' : <div className="error"> Todo can't be empty, please add a todo </div>}
       <div className="todoList">
          {todos.map((item, index) => { return <Item text={item} delete={handleDelete} id={index} />})}
       </div>

    </div>
  );
}

export default App;
