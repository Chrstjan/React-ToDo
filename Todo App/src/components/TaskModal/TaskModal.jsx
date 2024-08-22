import { useRef } from "react";
import style from "./TaskModal.module.scss";

export const TaskModal = ({ action }) => {
  //useRef can be used to getting a dom element without causing the page to re-render
  //Here i use it to get the value of the input field
  const inputRef = useRef("");

  return (
    <>
      <div className={style.taskModal}>
        <label htmlFor="taskName">Task Name:</label>
        <input
          ref={inputRef}
          name="taskName"
          type="text"
          placeholder="Fight Spiderman"
        />
        <button onClick={() => action(inputRef.current.value)}>
          Create Task
        </button>
      </div>
    </>
  );
};
