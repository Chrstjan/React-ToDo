import style from "./TaskModal.module.scss";

export const TaskModal = () => {
  return (
    <>
      <div className={style.taskModal}>
        <form>
          <label htmlFor="taskName">Task Name:</label>
          <input name="taskName" type="text" placeholder="Fight Spiderman" />
          <label htmlFor="taskAmount">Amount:</label>
          <input name="taskAmount" type="number" />
          <input type="submit" value="Create Task" />
        </form>
      </div>
    </>
  );
};
