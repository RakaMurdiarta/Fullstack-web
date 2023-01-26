import { useEffect, useState } from "react";
import useDataFetching from "./Hooks/useDataFetching";
import StatusBar from "./StatusBar";
import React from 'react'


const bars = [
    { id: 1, title: 'New' },
    { id: 2, title: 'Ongoing' },
    { id: 3, title: 'Under Review' },
    { id: 4, title: 'Completed' },
];

// console.log(bars);
function onDragStart(e, id) {
    console.log('onDragStart', id);
    e.dataTransfer.setData('id', id)
}

function onDragOver(e,id) {
    console.log('onDragOver', id);
    e.preventDefault();
}

const Board = () => {
    
    const [loading, error, data]= useDataFetching(`https://63b4ba8b0f49ecf50892b330.mockapi.io/api/v1/tasks`);
    console.log('From Board usedatafetching',data);
    const [tasks, setTasks] = useState([]);
    
    
    useEffect(() => {
        setTasks(data)
    }, [data])

    function onDrop(e, laneID) {
        const id = e.dataTransfer.getData('id')
        console.log('Ondrop', id);

        const updateTasks = tasks.filter((task) => {
            if (task.id.toString() === id) {
                task.status = laneID
            }
            return task;
        });
        setTasks(updateTasks)
    }
    return (
        <div className="Board">
            {bars.map((bar) => (

                <StatusBar key={bar.id} barID={bar.id} title={bar.title} loading={loading} error={error} tasks={tasks.filter((task) => task.status === bar.id)} onDragStart={onDragStart} onDragOver={onDragOver} onDrop={onDrop}
                />
            )
            )}
        </div>

    )
}

export default Board