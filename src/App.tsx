// components
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
// css styles modules
import styles from "./App.module.css";
// interface
import { ITask } from "./interfaces/Task";
import { useState } from "react";

function App() {

  const [tasklist, setTaskList] = useState<ITask[]>([]); // o tasklist será usado para armazenar as tarefas.

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2> O que você vai fazer?</h2>
          <TaskForm btnText="Criar Tarefa" taskList={tasklist}/>
        </div>
        <div>
          <h2>Suas Tarefas</h2>
          <TaskList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
