import React, { useState } from 'react'
import Header from './Header';
import './Todo.css'

function TodoForm({ dispatch }) {
  const [formValue, setFormValue] = useState('')

  const handleChange = (e) => {
    setFormValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formValue !== '') {
      dispatch({ type: 'ADD_TODO', payload: formValue.toUpperCase() })
      setFormValue('')
    }
  }

  return (
    <>
     <Header />  
      <form onSubmit={handleSubmit}>
         
        <input 
        name="task"
        value={formValue}
        placeholder='   Add Todo...'
        onChange={handleChange}
        />      
        <div>
          <button className='submit' type='submit'>
            Submit
          </button>
          
          <button className="remove" onClick={() => dispatch({ type: 'REMOVE_TODO' })}>
            Remove
          </button>          
        </div>
        
      </form>
      <hr />
    </>
  )
}

export default TodoForm;