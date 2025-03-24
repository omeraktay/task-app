import React from "react";


export default function TaskCard({task}){
    return (
        <div className="container">
            <div className="card">
                <div className="card-header ">{task.taskTitle}</div>
                <div className="card-body">{task.taskDetail}</div>
                <div className="card-footer">
                    <button className="btn btn-success me-1">Complete</button>
                    <button className="btn btn-warning me-1">Edit</button>
                    <button className="btn btn-danger me-1">Delete</button>
                </div>
            </div>
        </div>
    )
}