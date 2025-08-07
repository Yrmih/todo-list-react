import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";

// css styles modules
import styles from "./TaskForm.module.css";
// interfaces
import { ITask } from "../interfaces/Task";
import TaskList from "./TaskList";
interface ItaskProps {
  btnText: string;
  taskList: ITask[];
  setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>; // função para atualizar a lista de tarefas
}

const TaskForm = ({ btnText, taskList, setTaskList }: ItaskProps) => {
  const [id, setId] = useState<number>(0); // o id será usado para identificar a tarefa.
  const [title, setTitle] = useState<string>(""); // o title será usado para armazenar o título da tarefa.
  const [difficulty, setDifficulty] = useState<number>(0); // a dificuldade será usada para armazenar a dificuldade da tarefa.

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // previne o comportamento padrão do formulário.
    const id = Math.floor(Math.random() * 1000); // gera um id aleatório para a tarefa.
    const newTask: ITask = { id, title, difficulty };
    setTaskList!([...taskList, newTask]); // adiciona a nova tarefa à lista de tarefas.
    setTitle(""); // limpa o campo de título após adicionar a tarefa.
    setDifficulty(0); // limpa o campo de dificuldade após adicionar a tarefa.
    
    // o addTaskHandler será responsável por adicionar uma nova tarefa à lista de tarefas.
    console.log(TaskList); // exibe a nova tarefa no console para depuração.
    // isso é útil para verificar se a tarefa foi adicionada corretamente.
  }; // o addTaskHandler será responsável por adicionar uma nova tarefa.
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
  };
  // o handleChange é responsável por atualizar o estado do título e dificuldade com base no input do usuário.
  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          name="title"
          placeholder="Título da tarefa"
          onChange={handleChange}
          value={title || ""}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          type="text"
          name="difficulty"
          placeholder="Dificuldade da tarefa"
          onChange={handleChange}
          value={difficulty || ""}
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
