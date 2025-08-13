// interfaces
import { ITask } from "../interfaces/Task";
// css
import styles from "./TaskList.module.css";
export interface IAppProps {
  taskList: ITask[];
  handleDeleteTask: (id: number) => void; // opcional, caso queira passar uma função para deletar tarefas
  handleEdit(): void; // opcional, caso queira passar uma função para editar tarefas
}

const TaskList = ({ taskList, handleDeleteTask, handleEdit }: IAppProps) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div className={styles.task} key={task.id}>
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <i className="bi bi-pencil" onClick={() => {
                handleEdit(); // Chama a função de editar tarefa
              }}></i>
              <i
                className="bi bi-trash"
                onClick={() => {
                  handleDeleteTask(task.id); // Chama a função de deletar tarefa passando o id da tarefa
                }}
              ></i>
            </div>
          </div> // o iterar sobre a lista de tarefas e exibir cada tarefa. e exibir cada tarefa.
        ))
      ) : (
        <p>Não há tarefas cadastradas.</p> // Se não houver tarefas, exibe essa mensagem
      )}
    </>
  );
};

export default TaskList;
