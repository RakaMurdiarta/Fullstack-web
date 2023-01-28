import React from 'react'

const Dragable = () => {

    function dragstart(e) {
        console.log('drag');
        e.dataTransfer.setData('text', e.target.id)
    


    }
    function dragover(e) {
        e.preventDefault()

    }

    function drop(e) {
        e.preventDefault()
        console.log(e.target);
        var data =e.dataTransfer.getData('text')
        e.target.appendChild(document.getElementById(data))
        // console.log(e.dataTransfer.getData());

    }
    return (

        <div className="container">
            <div className="box" id='box1' onDrop={(e) => drop(e)} onDragOver={(e) => dragover(e)}>
                <img id='item1' src="https://loremflickr.com/640/480/city" alt="" draggable onDragStart={(e) => dragstart(e)} />
            </div>
            <div className="box" id='box2' onDrop={(e) => drop(e)} onDragOver={(e) => dragover(e)}>

            </div>
        </div>
    )
}

export default Dragable