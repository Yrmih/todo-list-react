
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
        <p>Tem tarefas cadastradas</p> // Se houver tarefas, exibe essa mensagem
      ) : (
        <p>Não há tarefas cadastradas.</p> // Se não houver tarefas, exibe essa mensagem
      )}
    </>
  );
};

export default TaskList;