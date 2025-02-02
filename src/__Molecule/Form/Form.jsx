import React from "react";
import "./Form.scss";
import Done from "../../assets/Images/done.png";
import AddButton from "../../__Atom/AddButton/AddButton";
import Plus from "../../assets/Images/plus.png";

function Form({ AddTask, taskInp, setTaskInp }) {
  return (
    <>
      <form className="tasks_add" onSubmit={AddTask}>
        <div>
          <input
            type="text"
            placeholder="Note"
            value={taskInp}
            onChange={(e) => {
              setTaskInp(e.target.value);
            }}
            maxLength={17}
          />
          <img className="done" src={Done} alt="Done" />
        </div>

        <AddButton image={Plus} alt="Plus" />
      </form>
    </>
  );
}

export default Form;
