import React from 'react';
import './Taskitem.css';

const Taskitem = ({name, info, state}) => {
    return (
        <div class = "single">
            <div>Công việc phải làm: {name}</div>
            <div>Mô tả: {info}</div>
            <input type = "checkbox" checked = {state}/>
        </div>
    );
};

export default Taskitem;