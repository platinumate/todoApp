import styles from "./post.module.css";
import Button from "../button/button";

const Post = (props) => {
  const { id, text, isActive } = props;

  return (
    <div className={styles.post}>
      <div className={styles.post__checkbox}>
        <input type="checkbox" checked={isActive} />
      </div>
      <div className={styles.post__wrapper}>
        <div className={styles.post__text}>
          <div>{text}</div>
        </div>
        <div className={styles.post__buttons}>
          <Button text="Удалить" img="url(/public/cross-black-16px.png)" eventFunc={props.removeTask} eventValue={id} />
          <Button text="Изменить" img="url(/public/edit-black-16px.png)" eventFunc={props.changeTask} eventValue={id} />
        </div>
      </div>
    </div>
  );
};

export default Post;
