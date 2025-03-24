export default function Summary({tasks}){
    if(tasks.length === 0){
        return (
            <div className="summary">
                You can start adding new tasks.
            </div>
        )
    }
    const taskCount = tasks.length;
    return(
        <div className="summary">
            <p>You have {taskCount} to complete.</p>
        </div>
    )
}