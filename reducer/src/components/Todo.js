import React from 'react'
import './Todo.css'

export default function Todo({dispatch, item}) {    
        return (
            <div 
            className='item' 
            onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: item })}>
            {item.isCompleted ? <del>{`${item.item}`}</del> : `${item.item}`}
            </div>
        )    
}