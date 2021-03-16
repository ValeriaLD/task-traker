import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react";
import AddTask from './components/AddTask';

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'TW Attestation',
        day: 'March 16th at 8:00 AM',
        reminder: true,
    }, 
    {
        id: 2,
        text: 'Meeting at School',
        day: 'March 17th at 2:00 PM',
        reminder: true,
    },
])

const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([ ...tasks, newTask])
}


const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
    task.id === id ? { ...task, reminder: !task.reminder} : task)
    )
}

return (
  <div className="container">
    <Header />
    <AddTask onAdd={addTask} />
    {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> ) : ('No task to show')}
  </div>
);

}


export default App;
