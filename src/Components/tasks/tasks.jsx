import styles from "./tasks.module.css";
import Post from "../posts/post";
import { visibilityFilters } from "../../redux/Constants/constants";

const Tasks = (props) => {
  const {
    array,
    removeTask,
    changeTask,
    setNewTask,
    newTask,
    changeInput,
    isEditItem,
    toggleTask,
    filter,
    newTheme,
  } = props;

  const filteredTasks = (todos, filter) => {
    switch (filter) {
      case visibilityFilters.SHOW_ALL:
        return todos;
      case visibilityFilters.SHOW_ACTIVE:
        return todos.filter((todo) => !todo.isCompleted);
      case visibilityFilters.SHOW_COMPLETED:
        return todos.filter((todo) => todo.isCompleted);
      default:
        return todos;
    }
  };

  if (filteredTasks(array).length > 0)
    return (
      <div className={styles.tasks}>
        {filteredTasks(array, filter).map((item, index) => {
          return (
            <Post
              {...item}
              key={index}
              removeTask={removeTask}
              changeTask={changeTask}
              setNewTask={setNewTask}
              newTask={newTask}
              changeInput={changeInput}
              isEditItem={isEditItem}
              toggleTask={toggleTask}
              newTheme={newTheme}
            />
          );
        })}
      </div>
    );
  else
    return (
      <div className={styles.tasks__error}>
        <p>Дела отсутствуют</p>
      </div>
    );
};

export default Tasks;
