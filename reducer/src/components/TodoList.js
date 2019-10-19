import React, { Component } from 'react'
import Todo from './Todo';


export default class TodoList extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                
                {this.props.data.map((item) => <Todo
                    item={item}
                    key={item.id} 
                    onClick={(e) => this.props.toggleItem(e, item.id)}/>)}
            </div>
        )
    }
}