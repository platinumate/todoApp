import styles from "./button.module.css";

const Button = (props) => {
  const { eventFunc, eventValue, img } = props;

  return (
    <div className={styles.button}>
      <button
        style={{ backgroundImage: img }}
        onClick={() => eventFunc(eventValue)}
      ></button>
    </div>
  );
};

export default Button;
