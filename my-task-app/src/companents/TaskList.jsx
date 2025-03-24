
import TaskCard from "./TaskCard";

export default function TaskList({tasks}){
    return(
        <>
            {
                tasks.length > 0 ? (
                    <div id="taskListContainer">
                        {tasks.map((task) => (<TaskCard task={task} key={task.id}/>))}
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