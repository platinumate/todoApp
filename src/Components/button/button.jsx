import styles from "./button.module.css";

const Button = (props) => {
  const { eventFunc, eventValue, img } = props;

  return (
    <div className={styles.button}>
      <button onClick={() => eventFunc(eventValue)}>
        <img src={img} />
      </button>
    </div>
  );
};

export default Button;
