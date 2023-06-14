import React from 'react';
import Addform from './Addform';
import { useState } from 'react';

const Add = () => {

    let [goals, SetGoals] = useState([]); 

    const AddGoal =  (typing) => {
        const New = {
            id: Math.random(),
            value: typing, 
        }
        SetGoals([...goals, New]); 
    }

    function removeTodo(id) {
        const New = []; 
        //console.log(goals.length); 
        for(let i = 0; i < goals.length; ++i) {
            if (goals[i].id !== id) {
                New.push(goals[i]); 
            }
        }
        SetGoals(New); 
    }

    function Todo({text, id}) {
        return (    
            <div onClick={() => removeTodo(id)}>
                {text}
            </div>
        );
    }

    return (
        <div>
            <div>
                Course goal
            </div>
            <Addform AddGoal = {AddGoal}></Addform>
                {
                    goals.map((goal) => (
                      <Todo text = {goal.value} id = {goal.id}></Todo>
                    ))
                }
        </div>
    );
};

export default Add;