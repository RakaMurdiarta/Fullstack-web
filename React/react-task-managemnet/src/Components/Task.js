import React from 'react'


const Task = ({ id, title, description, onDragStart }) => {
    return (
        <div className='Task' key={id} draggable onDragStart={(e) => onDragStart(e, id)}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Task;

