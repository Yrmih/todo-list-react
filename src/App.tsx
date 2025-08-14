// components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Modal from "./components/Modal";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
// css styles modules
import styles from "./App.module.css";
// interface
import { ITask } from "./interfaces/Task";
import { useEffect, useState } from "react";

function App() {
  const [tasklist, setTaskList] = useState<ITask[]>([]); // o tasklist será usado para armazenar as tarefas.
  const [taskToupdate, setTaskToUpdate] = useState<ITask | null>(null); // o taskToupdate será usado para armazenar a tarefa que será editada.

  const deleTask = (id: number) => {
    // Função para deletar uma tarefa.
    setTaskList(
      tasklist.filter((task) => {
        // tasklist.filter() retorna um novo array com as tarefas que não possuem o id passado como parâmetro.
        return task.id !== id;
      })
    );
  };

  const hideOrShowModal = (display: boolean) =>{
    const modal = document.querySelector('#modal');
    if(display) {
      modal!.classList.remove('hide');
    } // adicionando a classe 'hide' para esconder o modal.
    else {
      modal!.classList.add('hide');
    }
  }

  const editTask = (task: ITask): void => { // colocar o itask como parâmetro para editar a tarefa no modal 
    hideOrShowModal(true);
    setTaskToUpdate(task); // setando a tarefa que será editada.
  }
  useEffect(() => {
    console.log("Atualização do taskList:", tasklist); // Log após cada atualização
  }, [tasklist]);

  return (
    <div>
      <Modal>
        <TaskForm
          btnText="Editar Tarefa"
          taskList={tasklist}
          setTaskList={setTaskList}
        />
      </Modal>
      <Header />
      <main className={styles.main}>
        <div>
          <h2> O que você vai fazer?</h2>
          <TaskForm
            btnText="Criar Tarefa"
            taskList={tasklist}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas Tarefas</h2>
          <TaskList taskList={tasklist} handleDeleteTask={deleTask} handleEdit={editTask}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
