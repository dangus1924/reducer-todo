import React from 'react'

export default function Todo(props) {    
        return (
            <div 
            onClick={props.onClick}
            className={`item${props.item.completed ? " completed" : ""}`}>
                {props.item.task}
            </div>
        )    
}