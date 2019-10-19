import React, { useReducer } from 'react';
import TodoList from './components/TodoList';
import { initialState, reducer } from './reducers/todo';
import './App.css'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <div className='mainContainer'>
        <TodoList todoList={state.todoItems} state={state} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;