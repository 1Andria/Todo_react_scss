import "./Container.scss";
import FlowerDiv from "../../__Molecule/FlowerDiv/FlowerDiv";
import Form from "../../__Molecule/Form/Form";
import NewTask from "../../__Molecule/NewTask/NewTask";
import React, { useState, useEffect } from "react";

function Container() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });
  const [taskInp, setTaskInp] = useState("");
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function AddTask(e) {
    e.preventDefault();
    if (taskInp.trim() === "") {
      alert("you should enter something");
      setTaskInp("");
      return;
    }
    const newTask = {
      name: taskInp,
      checked: false,
      id: Date.now(),
      time: Date().slice(3, Date().length - 36),
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
      <div className="main_container">
        <FlowerDiv />
        <Form AddTask={AddTask} taskInp={taskInp} setTaskInp={setTaskInp} />
        {tasks.map((task, key) => {
          return (
            <NewTask
              key={key}
              task={task}
              TaskChecked={TaskChecked}
              deleteTask={deleteTask}
            />
          );
        })}
      </div>
    </>
  );
}

export default Container;
