import React from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';
import './Todo.css'


export default function TodoList({ dispatch, todoList }) {
    console.log(dispatch)
    
    return (
      <div className='listContainer'>
        <div className="formContainer">
          <TodoForm dispatch={dispatch} />
        </div>
        <div >
          {todoList.map(item=> <Todo key={item.id} item={item} dispatch={dispatch} />)}
        </div>
      </div>
    )
  }
  
 