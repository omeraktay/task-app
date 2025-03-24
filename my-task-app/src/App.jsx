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
    const approval = window.confirm("This will delete all your tasks. Do you want to continue?");
    if(approval){
      setTasks([]);
    }
  }

  return (
    <>
      <div className="wrapper">
          <div className="content">
              <Header />
              <TaskForm onAddTask={handleAddTask} onClearList={handleClearList}/>
              <TaskList tasks={tasks}/>
              <Summary tasks={tasks}/>
          </div>
            <Footer />
        </div>
    </>
  )
}

export default App
