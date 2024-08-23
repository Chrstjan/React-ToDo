import { tasksArray } from "./assets/App";
import { Container } from "./components/Container/Container";
import { ContainerBody } from "./components/Container/ContainerBody/ContainerBody";
import { ContainerHeader } from "./components/Container/ContainerHeader/ContainerHeader";
import { Main } from "./components/Main/Main";
import { useState } from "react";
import { Task } from "./components/Task/Task";
import "./App.scss";
import { TaskModal } from "./components/TaskModal/TaskModal";
import { ContainerFooter } from "./components/Container/ContainerFooter/ContainerFooter";
import { Button } from "./components/Button/Button";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState(tasksArray);

  const handleModal = () => {
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  };

  const handleCreateTask = (taskName) => {
    const newTask = {
      name: taskName,
      amount: 1,
      complete: false,
    };

    setTask([...task, newTask]);
  };

  const handleDeleteAllTasks = () => {
    setTask([]);
  }

  return (
    <>
      <Main>
        <Container>
          <ContainerHeader />
          <ContainerBody>
            {isOpen ? <TaskModal action={handleCreateTask} /> : null}
            <section className="tasksContainer">
              <Task tasks={task} setTasks={setTask} />
            </section>
          </ContainerBody>
          <ContainerFooter>
            <Button action={handleModal} symbol='+' text='Create New'/>
            <Button action={handleDeleteAllTasks} symbol='-' text='Delete All'/>
          </ContainerFooter>
        </Container>
      </Main>
    </>
  );
}

export default App;
