import styles from "./input.module.css";

const Input = (props) => {
  const { eventFunc, setFunc, task, text, id, isCompleted } = props;

  return (
    <div className={styles.input}>
      <input
        type="text"
        placeholder={text}
        onChange={(e) => setFunc(e.target.value)}
        value={task}
        onKeyDown={(e) => eventFunc(e, id, isCompleted)}
      />
    </div>
  );
};

export default Input;
