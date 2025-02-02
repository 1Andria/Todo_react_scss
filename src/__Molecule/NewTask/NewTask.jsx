import React from "react";
import "./NewTask.scss";
import Trash from "../../assets/Images/trash.png";
import AddButton from "../../__Atom/AddButton/AddButton";

function NewTask({ task, TaskChecked, deleteTask }) {
  return (
    <>
      <div className="task_div">
        <div key={task.id} className="task">
          <div className="infi">
            <h1 className={`task_name ${task.checked ? "task_name_plus" : ""}`}>
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
            <AddButton
              image={Trash}
              classname="trash_btn"
              onClick={() => deleteTask(task.id)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NewTask;
