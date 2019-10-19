import React from 'react'
import Todo from './Todo';


export default function TodoList(props) {    
        console.log(props)
        return (
            <div>
                
                {props.data.map((item) => <Todo
                    item={item}
                    key={item.id} 
                    onClick={(e) => this.props.toggleItem(e, item.id)}/>)}
            </div>
        )
    
}