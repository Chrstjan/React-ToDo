import { tasksArray } from "./assets/App";
import { Container } from "./components/Container/Container";
import { ContainerBody } from "./components/Container/ContainerBody/ContainerBody";
import { ContainerHeader } from "./components/Container/ContainerHeader/ContainerHeader";
import { Main } from "./components/Main/Main";
import { useState } from "react";
import { Task } from "./components/Task/Task";
import "./App.scss";
import { TaskModal } from "./components/TaskModal/TaskModal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState(tasksArray);

  const handleModal = () => {
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  };

  const handleCreateTask = (taskName, taskAmount) => {
    const newTask = {
      name: taskName,
      amount: taskAmount,
      complete: false,
    };

    setTask([...task, newTask]);
  };
  return (
    <>
      <Main>
        <Container>
          <ContainerHeader />
          <ContainerBody>
            <button onClick={() => handleCreateTask("Watch Spiderman 1", 1)}>
              Add Task
            </button>
            <button onClick={handleModal}>
              {isOpen ? "Close Modal" : "Create New"}
            </button>

            {isOpen ? <TaskModal /> : null}
            <section className="tasksContainer">
              <Task tasks={task} setTasks={setTask} />
            </section>
          </ContainerBody>
        </Container>
      </Main>
    </>
  );
}

export default App;
