import styles from "./input.module.css";

const Input = (props) => {
  const {
    eventFunc,
    setFunc,
    task,
    text,
    id,
    isCompleted,
    buttonFunc,
    newTheme,
  } = props;

  return (
    <div className={styles.input}>
      <input
        type="text"
        placeholder={text}
        onChange={(e) => setFunc(e.target.value)}
        value={task}
        onKeyDown={(e) => eventFunc(e)}
        autoFocus
      />
      <div className={styles.input__button}>
        <button onClick={() => buttonFunc(false, true, id, isCompleted)}>
          <img
            src={
              newTheme === "LIGHT_THEME"
                ? "src/img/apply-img.svg"
                : "src/img/apply-img-light.png"
            }
          />
        </button>
      </div>
    </div>
  );
};

export default Input;
