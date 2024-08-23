import { useState } from "react";
import style from "./Task.module.scss";

export const Task = ({ tasks, setTasks }) => {
  console.log(tasks);

  const handleDeleteTask = (taskName) => {
    //filter & !== loops and returns a new array and checks if one of the objects name and the value from taskName is the same.
    //It keeps the one where the name is not the same and removes the one where it is
    const updatedTask = tasks.filter((task) => task.name !== taskName);
    console.log(updatedTask);
    setTasks(updatedTask);
  };

  return (
    <>
      {tasks.map((task, index) => {
        return (
          <span className={style.tasksStyling} key={index}>
            <header>
              <h3>{task.name}</h3>
            </header>
            <span className={style.buttonContainer}>
              <button className={style.taskButton} onClick={() => handleDeleteTask(task.name)}>-</button>
            </span>
          </span>
        );
      })}
    </>
  );
};
