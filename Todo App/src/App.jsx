import "./App.scss";
import { tasksArray } from "./assets/App";
import { Container } from "./components/Container/Container";
import { ContainerBody } from "./components/Container/ContainerBody/ContainerBody";
import { ContainerHeader } from "./components/Container/ContainerHeader/ContainerHeader";
import { Main } from "./components/Main/Main";
import { useState} from "react";

function App() {
  const [task, setTask] = useState({})

  const handleCreateTask = () => {
    setTask({
      name: "Test",
      amount: 1,
      complete: false
    });
    console.log(task);
    tasksArray.push(task);
    console.log(tasksArray);
  }
  return (
    <>
      <Main>
        <Container>
          <ContainerHeader />
          <ContainerBody>
            <button onClick={handleCreateTask}>Add Task</button>
          </ContainerBody>
        </Container>
      </Main>
    </>
  );
}

export default App;
