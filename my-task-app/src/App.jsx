import { useState } from 'react';
import './App.css';
import Footer from "./companents/Footer";
import Header from "./companents/Header";
import TaskForm from './companents/TaskForm';
import TaskList from './companents/TaskList';
import Summary from './companents/Summary';
// import { data } from '../data';

function App() {
  const [tasks, setTasks] = useState([]);
  function handleAddTask(task){
    setTasks((tasks) => [...tasks, task]);
  }
  function handleClearList(){
    const clearList = window.confirm("This will delete all your tasks. Do you want to continue?");
    if(clearList){
      setTasks([]);
    }
  }
  function handleCompleteTask(id){
    setTasks((prevTasks) => prevTasks.map((task) => task.id === id ? { ...task, completed: !task.completed} : task));
  }
  function handleEditTask(id, newTitle, newDetails){
    setTasks((prevTasks) => prevTasks.map((task) => task.id === id ? {...task, taskTitle: newTitle, taskDetail: newDetails} : task));
  }
  function handleDeleteTask(id){
    const deleteTask = window.confirm("Do you want to delete this task?");
    if(deleteTask){
      setTasks(tasks => tasks.filter(task => task.id !== id));
    }
  }

  return (
      <div className="wrapper">
          <div className="content">
              <Header />
              <TaskForm onAddTask={handleAddTask} onClearList={handleClearList}/>
              <TaskList tasks={tasks} onCompleteTask={handleCompleteTask} onEditTask={handleEditTask} onDeleteTask={handleDeleteTask}/>
              
          </div>
          <div className='summaryCont'>
            <Summary tasks={tasks}/>
          </div>
          <div className='footerCont'>
            <Footer />
            </div>
        </div>
  )
}

export default App
