import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { useState } from "react";
import "./App.css";
let tasksArray = [];
let input = "";

function App() {
  const [tasks, setTasks] = useState(tasksArray);

  const addTask = () => {
    const newTasks = [...tasks, input];
    setTasks(newTasks);
  };

  const handleChange = (e) => setTasks(e.target.value);

  return (
    <div className="App">
      <Header />

      <h1>Tasks</h1>
      <ul>
        {tasks.map((task, i) => {
          return <li key={i}>{task}</li>;
        })}
      </ul>
      <input type="text" name="task" value={tasks} onChange={handleChange} />
      <button onClick={addTask}>Add Task</button>

      <Main />
      <Footer />
    </div>
  );
}

export default App;
