import React from "react";
import { useState } from "react";
import './card.css'

function Card(){  
    const [tasks, setTasks] = useState([
        { 
            id: 1,
            title: 'MN2 Analisis',
            body: 'Analizar elementos.',
            list: 1
        },
        { 
            id: 2,
            title: 'MN2 Espera',
            body: 'Esperar texto.',
            list: 1
        },
        { 
            id: 3,
            title: 'MN3 Despliegue',
            body: 'Me dió flojera escribir una descripción, texto de ejemplo.',
            list: 3
        },
        { 
            id: 4,
            title: 'MN2 Diseño',
            body: 'Me dió flojera escribir una descripción, texto de ejemplo.',
            list: 2
        },
        { 
            id: 5,
            title: 'MN1 Espera',
            body: 'Me dió flojera escribir una descripción, texto de ejemplo.',
            list: 2
        },
        { 
            id: 6,
            title: 'MN1 Aplicación',
            body: 'Me dió flojera escribir una descripción, texto de ejemplo.',
            list: 4
        },
        { 
            id: 7,
            title: 'MN4 Elementos',
            body: 'Me dió flojera escribir una descripción, texto de ejemplo.',
            list: 4
        },
        { 
            id: 8,
            title: 'MN1 Testeo de cosas',
            body: 'Me dió flojera escribir una descripción, texto de ejemplo.',
            list: 4
        },
    ]);

    const getList = (list) => {
        return tasks.filter(item => item.list === list)
    }

    const startDrag = (evt, item) => {
        evt.dataTransfer.setData('itemID', item.id)
        console.log(item);
    }

    const draggingOver = (evt) => {
        evt.preventDefault();
    }

    const onDrop = (evt, list) => {
        const itemID = evt.dataTransfer.getData('itemID');
        const item = tasks.find(item => item.id === itemID);
        item.list = list;

        const newState = tasks.map(task => {
            if(task.id === itemID) return item;
            return task
        })

        setTasks(newState);
    }

    return (
        <>
            <h1>
                Crunchy Ticket Handler
                <img className='icon-react' src="src/assets/react.svg" alt="" />
            </h1>
            <br/>

            <div className='drag-and-drop'>
                <div className='column column--1'>
                    <h3>
                        To Do
                    </h3>
                    <div className='dd-zone' droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 1))}>
                        {getList(1).map(item => (
                            <div className='dd-element' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                <strong className='title'>{item.title}</strong>
                                <p className='body'>{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='column column--2'>
                    <h3>
                        In Progress
                    </h3>
                    <div className='dd-zone' droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 2))}>
                        {getList(2).map(item => (
                            <div className='dd-element' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                <strong className='title'>{item.title}</strong>
                                <p className='body'>{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className='column column--3'>
                    <h3>
                        Review
                    </h3>
                    <div className='dd-zone' droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 3))}>
                        {getList(3).map(item => (
                            <div className='dd-element' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                <strong className='title'>{item.title}</strong>
                                <p className='body'>{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='column column--4'>
                    <h3>
                        Deployment Ready
                    </h3>
                    <div className='dd-zone' droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 4))}>
                        {getList(4).map(item => (
                            <div className='dd-element' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                <strong className='title'>{item.title}</strong>
                                <p className='body'>{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;