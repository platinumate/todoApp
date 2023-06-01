import styles from "./tasks.module.css";
import Post from "../posts/post";

const Tasks = (props) => {
  if (props.array.length > 0)
    return (
      <div className={styles.tasks}>
        {props.array.map((item, index) => {
          return <Post {...item} key={index} removeTask={props.removeTask} />;
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
