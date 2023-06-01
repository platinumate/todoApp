import styles from "./button.module.css";

const Button = (props) => {
  return (
    <div className={styles.button}>
      <button
        style={{ backgroundImage: props.img }}
        onClick={() => props.eventFunc(props.eventValue)}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
