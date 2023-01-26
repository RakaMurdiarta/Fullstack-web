import React from 'react'
import Task from './Task'

const StatusBar = ({ barID, title, loading, error, tasks, onDragStart, onDragOver, onDrop }) => {
    return (
        <div className="Status" onDragOver={(e)=>onDragOver(e,barID)} onDrop={(e) => onDrop(e, barID)}>
            <h3>{title}</h3>
            {
                loading || error ? <span>{error || 'Loading....'}</span> : tasks.map((task) =>
                (
                    <Task key={task.id}
                        id={task.id}
                        title={task.title}
                        description={task.description}
                        onDragStart={onDragStart}
                    />
                )
                )
            }
        </div>
    )
}

export default StatusBar