import { useRef } from "react";
import style from "./TaskModal.module.scss";

export const TaskModal = ({ action, handleClose }) => {
  //useRef can be used to getting a dom element without causing the page to re-render
  //Here i use it to get the value of the input field
  const inputRef = useRef("");

  const handleInnerClick = (event) => {
    event.stopPropagation();
};

  return (
    <>
      <div onClick={handleClose} className={style.overlay}></div>
      <div onClick={handleInnerClick} className={style.taskModal}>
        <h2>Create New Task</h2>
        <button onClick={handleClose} className={style.closeBtn}>X</button>
        <label htmlFor="taskName">Task Name:</label>
        <input
          ref={inputRef}
          name="taskName"
          type="text"
          placeholder="Take Pictures Of Spiderman"
        />
        <button onClick={() => action(inputRef.current.value)}>
          Create Task
        </button>
      </div>
    </>
  );
};
