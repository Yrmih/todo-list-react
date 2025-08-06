import { useState, ChangeEvent, FormEvent, useEffect } from "react";

// css styles modules
import styles from "./TaskForm.module.css";
// interfaces
import { ITask } from "../interfaces/Task";
interface ItaskProps {
  btnText: string;
}

const TaskForm = ({ btnText }: ItaskProps) => {

  const[id, setId] = useState<number>(0);
  const[title, setTitle] = useState<string>("");
  const[difficulty, setDifficulty] = useState<number>(0);

  const addTaskHandler = () => {}
  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título:</label>
        <input type="text" name="title" placeholder="Título da tarefa" />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input type="text" name="title" placeholder="Dificuldade da tarefa" />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
