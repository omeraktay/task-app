import { useState } from "react"

export default function TaskForm({onAddTask, onClearList}){
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDetail, setTaskDetail] = useState('');
    
    function handleFormSubmit(e){
        e.preventDefault();
        if(taskTitle && taskDetail){
            const task = {id: Date.now(), taskTitle, taskDetail, completed: false};
            console.log(task);
            onAddTask(task);
            setTaskTitle('');
            setTaskDetail('');
        }
    }

    return (
    <>
        <div className=""  id="addTask">
            <div className="container">
                <div className="p-3" >
                    <form onSubmit={handleFormSubmit}>
                        <input id="taskTitle" className="mt-2 form-control" type="text" placeholder="Task title..." value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} required/> <br />
                        <textarea id="taskDetail" placeholder="Add details for your task..." className="form-control mt-0" value={taskDetail} onChange={(e) => setTaskDetail(e.target.value)} required></textarea>
                        <button className="btn btn-primary me-2 mt-3" type="submit"> ➕ Add</button>
                        <button className="btn btn-danger me-2 mt-3" type="button" onClick={onClearList}> 🗑️ Delete All</button>
                    </form>
                </div>
            </div>
        </div>
    </>
    )
  }