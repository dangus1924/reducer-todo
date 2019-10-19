import React, { useState } from 'react';

function TodoForm(props) {
    const [state, setState] = useState('');

  const handleChange = (e) => {
    setState(e.target.value);
    }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addItem(e, state.value)
    
  
    return (        
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={state.value}
          onChange={handleChange}
        />
        <button>Add Todo</button>
      </form>
     
    );  
}}

export default TodoForm;