import styles from "./tasks.module.css";
import Post from "../posts/post";
import { initialState } from "../../redux/Reducers/todoReducer";
import { visibilityFilters } from "../../redux/Constants/Constants";
import { useSelector } from "react-redux";

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
  } = props;

  console.log(initialState)
  let filter = useSelector((store) => store.visibilityReducer.visibilityFilter);

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
