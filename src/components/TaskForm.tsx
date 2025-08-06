import { useState, ChangeEvent, FormEvent, useEffect } from "react";

// css styles modules
import styles from "./TaskForm.module.css";
// interfaces
import { ITask } from "../interfaces/Task";
interface ItaskProps {
  btnText: string;
}

const TaskForm = ({ btnText }: ItaskProps) => {
  const [id, setId] = useState<number>(0); // o id será usado para identificar a tarefa.
  const [title, setTitle] = useState<string>(""); // o title será usado para armazenar o título da tarefa.
  const [difficulty, setDifficulty] = useState<number>(0); // a dificuldade será usada para armazenar a dificuldade da tarefa.

  const addTaskHandler = () => {

  }; // o addTaskHandler será responsável por adicionar uma nova tarefa.
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === "title") {
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
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          type="text"
          name="title"
          placeholder="Dificuldade da tarefa"
          onChange={handleChange}
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
