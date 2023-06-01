import styles from "./input.module.css";

const Input = (props) => {
  const { createTask, setTask, task } = props;

  return (
    <div className={styles.input}>
      <input
        type="text"
        placeholder="Введите текст задачи"
        onChange={(e) => setTask(e.target.value)}
        value={task}
        onKeyDown={(e) => createTask(e)}
      />
    </div>
  );
};

export default Input;
