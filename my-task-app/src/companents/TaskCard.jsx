import React, { useState } from "react";


export default function TaskCard({task, onCompleteTask, onEditTask, onDeleteTask}){
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(task.taskTitle);
    const [newDetails, setNewDetails] = useState(task.taskDetail);

    function handleSave(){
        if(newTitle.trim() && newDetails.trim()){
            onEditTask(task.id, newTitle, newDetails)
        }
        setIsEditing(false);
    }

    return (
        <div className="container">
            <div className="card mb-3 task-card">
                <div className="card-header d-flex justify-content-between">
                    <div>
                        {
                            isEditing ? (
                                <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} 
                                       onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                                       autoFocus className="form-control"
                                />
                            ) : (
                                <span onDoubleClick={() => setIsEditing(true)}>{task.taskTitle}</span>
                            )
                        }
                    </div>
                    <div>
                       {
                        task.completed ? (
                            <span id="taskCompleted">Completed ✅</span>
                        ) :
                        (
                            <span id="notCompleted">Not completed ❌</span>
                        )
                       }
                    </div>
                </div>
                <div className="card-body">
                    {
                        isEditing ? (
                            <textarea className="form-control" value={newDetails} onChange={(e) => setNewDetails(e.target.value)}
                                      onBlur={handleSave}   onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                            />
                        ) : (
                            <p onDoubleClick={() => setIsEditing(true)}>{task.taskDetail}</p>
                        )
                    }
                </div>
                <div className="card-footer">
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-warning me-1 edit-button" onClick={() => setIsEditing(true)}>Edit</button>
                        <button className={`btn btn-${task.completed ? "dark" : "success"} me-1 `} onClick={() => onCompleteTask(task.id)}>
                            {task.completed ? "Change Status" : "Complete"}
                        </button>
                        <button className="btn btn-danger me-1" onClick={() => onDeleteTask(task.id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}