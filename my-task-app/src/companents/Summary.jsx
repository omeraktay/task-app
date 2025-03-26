export default function Summary({tasks}){
    if(tasks.length === 0){
        return (
            <div className="summary">
                You can start adding new tasks.
            </div>
        )
    }
    const taskCount = tasks.length;
    const completedTaskCount = tasks.filter(task => task.completed).length
    
    if(completedTaskCount === 0){
        return (
            <p className="summary">You better start now!</p>
        )
    }
    if(taskCount === completedTaskCount){
        return(
            <p className="summary">You have completed all your tasks today 💯</p>
        )
    }
    else{
        return(
            <p className="summary">
                You have completed {completedTaskCount} out of {taskCount} of your tasks. You are almost there  🎯
            </p>
        )
    }
}