import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./App.scss";
import Flower from "./assets/Images/flower.png";
import Plus from "./assets/Images/plus.png";
import Done from "./assets/Images/done.png";
import Trash from "./assets/Images/trash.png";
function App() {
  const [date, setDate] = useState(GetCurrentDate());
  const [time, setTime] = useState();
  const [tasks, setTasks] = useState([]);
  const [taskInp, setTaskInp] = useState("");

  function GetCurrentDate() {
    return new Date().toLocaleDateString("en-US", {
      day: "numeric",
      weekday: "short",
    });
  }

  function GetCurrentTime() {
    return new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(GetCurrentDate());
      setTime(GetCurrentTime());
    }, 1000);
  });

  function AddTask(e) {
    e.preventDefault();
    if (taskInp.trim() === "") {
      alert("you should enter something");
      return;
    }
    const newTask = {
      name: taskInp,
      checked: false,
      id: Date.now(),
      time: GetCurrentTime(),
    };
    setTasks([...tasks, newTask]);
    setTaskInp("");
  }
  function TaskChecked(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <h1 className="Todo">Todo</h1>
      <div className="main_container">
        <div className="flower_div">
          <img src={Flower} alt="flower_image" />
          <h1 className="date">{date}</h1>
          <h1 className="time">{time}</h1>
        </div>
        <form className="tasks_add" onSubmit={AddTask}>
          <input
            type="text"
            placeholder="Note"
            value={taskInp}
            onChange={(e) => {
              setTaskInp(e.target.value);
            }}
            maxLength={15}
          />
          <button type="submit">
            <img src={Plus} alt="plus" />
          </button>
          <img className="done" src={Done} alt="Done" />
        </form>

        <div className="task_div">
          {tasks.map((task) => (
            <div key={task.id} className="task">
              <div className="infi">
                <h1
                  className={`task_name ${
                    task.checked ? "task_name_plus" : ""
                  }`}
                >
                  {task.name}
                </h1>
                <p className="task_time">{task.time}</p>
              </div>
              <div className="done_trash">
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={task.checked}
                  onChange={() => TaskChecked(task.id)}
                />
                <button
                  className="trash_btn"
                  onClick={() => deleteTask(task.id)}
                >
                  <img src={Trash} alt="Remove" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
