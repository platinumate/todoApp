import styles from "./tasks.module.css";
import Post from "../posts/post";

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

  if (array.length > 0)
    return (
      <div className={styles.tasks}>
        {array.map((item, index) => {
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
