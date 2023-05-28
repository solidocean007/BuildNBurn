import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [taskCount, setTaskCount] = useState(0)
  const [task, setTask] = useState('');
  cosnt [taskList, setTaskList] = useState([]);

  const handleChange = () {
    
  }

  return (
    <div className='todo-panel'>
      <div className="title">Task Manager</div>
      <div className="task-input">
        <input type="text" value={task} onChange={handleChange} />
      </div>
      .
    </div>
  )
}

export default App
