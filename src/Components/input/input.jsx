import styles from "./input.module.css";

const Input = (props) => {
  const { eventFunc, setFunc, task, text, id, isCompleted, buttonFunc } = props;

  return (
    <div className={styles.input}>
      <input
        type="text"
        placeholder={text}
        onChange={(e) => setFunc(e.target.value)}
        value={task}
        onKeyDown={(e) => eventFunc(e, id, isCompleted)}
      />
      <button onClick={() => buttonFunc(id, isCompleted)}>
        <img src="src/img/apply-img.svg" />
      </button>
    </div>
  );
};

export default Input;
