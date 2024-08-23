import style from "./Task.module.scss";
import { Button } from "../Button/Button";
import { inProgressArray, tasksArray } from "../../assets/App";

export const Task = ({ tasks, setTasks, action}) => {
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
              <Button action={() => handleDeleteTask(task.name)} text='' symbol='-'/>
              <Button action={() => handleTaskInProgress(task)} text='' symbol='>'/>
            </span>
          </span>
        );
      })}
    </>
  );
};
