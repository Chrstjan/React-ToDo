import "./App.scss";
import { tasksArray } from "./assets/App";
import { Container } from "./components/Container/Container";
import { ContainerBody } from "./components/Container/ContainerBody/ContainerBody";
import { ContainerHeader } from "./components/Container/ContainerHeader/ContainerHeader";
import { Main } from "./components/Main/Main";
import { useState} from "react";
import { Task } from "./components/Task/Task";

function App() {
  const [task, setTask] = useState({})

  const handleCreateTask = (taskName, taskAmount) => {
    const newTask = {
      name: taskName,
      amount: taskAmount,
      complete: false
    }
    setTask(newTask);
    console.log(task);
    tasksArray.push(newTask);
    console.log(tasksArray);
  }
  return (
    <>
      <Main>
        <Container>
          <ContainerHeader />
          <ContainerBody>
            <button onClick={() => handleCreateTask("Funny haha", 1)}>Add Task</button>
            <Task tasks={tasksArray}/>
          </ContainerBody>
        </Container>
      </Main>
    </>
  );
}

export default App;
