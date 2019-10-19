import React from 'react';
import TodoList from './components/TodoList';
import './components/Todo.css';
import TodoForm from './components/TodoForm';

let data = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state


class App extends React.Component {
 
  constructor(){
    super();
    this.state = {
      data
    }
  }

  toggleItem = (event, itemId) => {
    this.setState({
      data: this.state.data.map(item => {
        if(item.id === itemId){
          return {
            ...item,
            completed: !item.completed
          }
        }else{
          return item
        }
      })
    })
  }

  deleteCompleted = event => {
    event.preventDefault()

    this.setState({
      
      data: this.state.data.filter(item => {
       
        return !item.completed
      })
    })
  }



  addItem = (event, itemName) => {
    const newItem = {
     
      id: Date.now(),
      task: itemName,
      completed: false
    }

    this.setState({
     
      data: [newItem, ...this.state.data]
    })
  }

    

  render() {
    return (
      <div>
        <div className="header">
          <h1>To-Do-List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList toggleItem={this.toggleItem} data={this.state.data}/>
        <button className="clear-btn" onClick={this.deleteCompleted}>
            Delete Completed
        </button>
      </div>
    );
  }
}

export default App;