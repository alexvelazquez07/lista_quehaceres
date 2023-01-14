import React, { useState } from "react";

const ListaQueHaceres = () => {
    const [val, setVal] = useState("");
    const [tasks, setTasks] = useState([]);

    const addTask = (e) => {
    e.preventDefault();
    setTasks([
        ...tasks,
        {
        miniTask: val,
        done: false,
        },
    ]);
    setVal("");
    };

    const checkHandler = (index) => {
    const newTask = {
        ...tasks[index],
    };
    newTask.done = !newTask.done;
    console.log([...tasks.slice(0, index)]);
    setTasks(
        [...tasks.slice(0, index), newTask].concat(tasks.slice(index + 1))
    );
    };

    const deleteHandler = (index) => {
    setTasks(tasks.slice(0, index).concat(tasks.slice(index + 1)));
    };

    return (
    <div>
        {tasks.map((item, i) => (
        <div key={i}>
            <p style={{ textDecoration: item.done && "line-through" }}>
            {item.miniTask}
            <input
                type="checkbox"
                checked={item.done}
                onChange={(e) => checkHandler(i)}
                readOnly
            ></input>
            <button onClick={(e) => deleteHandler(i)}>Eliminar</button>
            </p>
        </div>
        ))}
        <form onSubmit={addTask}>
            <input value={val} onChange={(e) => setVal(e.target.value)}></input>
            <button>Agregar</button>
        </form>
    </div>
    );
};

export default ListaQueHaceres;