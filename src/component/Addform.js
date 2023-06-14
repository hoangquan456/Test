import React from 'react';
import { useState } from 'react';

const Addform = ({AddGoal}) => {
    const [typing, SetTyping] = useState("");

    const HandleSubmit = (e) => {
        e.preventDefault();
        if (typing == "") return; 
        AddGoal(typing);
        SetTyping(""); 
    }

    const HandleInput = (e) => {
        SetTyping(e.target.value);
    }

    return (
        <div>
            <form onSubmit={HandleSubmit}>
                <input
                    type = "text"
                    placeholder = "Enter a goal"
                    value = {typing}
                    onChange = {HandleInput}
                />
                <button type = "submit">Add goal</button>
            </form>
        </div>
    );
};

export default Addform;