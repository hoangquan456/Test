import React from 'react';

const Todolist = () => {
    const a = [
        {id: 1, title: "task 1", state: 1},
        {id: 2, title: "task 2", state: 0},
        {id: 3, title: "task 3", state: 1},
    ]

    return (
        <div>
            <h2>to do list</h2>
            <ul>
                {a.map((tmp) => 
                    <li key = {tmp.id}>
                        <input type = "checkbox" checked = {tmp.state}></input>
                        <span>{tmp.title}</span>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Todolist;