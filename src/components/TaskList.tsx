
// interfaces
import { ITask } from "../interfaces/Task";
// css
import styles from "./TaskList.module.css";
export interface IAppProps {
  taskList: ITask[];
}




const TaskList = ({taskList}: IAppProps) => {
    return (
      <div>
        Lista de Tarefas
      </div>
    );
  }

export default TaskList;