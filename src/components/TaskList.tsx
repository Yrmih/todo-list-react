
// interfaces
import { ITask } from "../interfaces/Task";
// css
import styles from "./TaskList.module.css";
export interface IAppProps {
  taskList: ITask[];
}




const TaskList = ({ taskList }: IAppProps) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div className={styles.task} key={task.id}> 
            <p>{task.title}</p>
          </div> // o map serve para iterar sobre a lista de tarefas e exibir cada tarefa.
        ))
      ) : (
        <p>Não há tarefas cadastradas.</p> // Se não houver tarefas, exibe essa mensagem
      )}
    </>
  );
};

export default TaskList;