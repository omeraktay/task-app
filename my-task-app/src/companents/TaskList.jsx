import React from "react";
import TaskCard from "./TaskCard";

export default function TaskList({tasks, onCompleteTask, onEditTask, onDeleteTask}){
    return(
        <>
            {
                tasks.length > 0 ? (
                    <div id="taskListContainer">
                        {tasks.map((task) => (<TaskCard task={task} key={task.id} onCompleteTask={onCompleteTask} onEditTask={onEditTask} onDeleteTask={onDeleteTask}/>))}
                    </div>
                ) : (
                    <div id="taskListContainer">
                        <p>You do NOT have any task to complete today.</p>
                     </div>
                )

            }
        </>
    )
}