import styles from "./post.module.css";
import Button from "../button/button";
import Input from "../input/input";

const Post = (props) => {
  const {
    id,
    text,
    isCompleted,
    removeTask,
    changeTask,
    setNewTask,
    newTask,
    changeInput,
    isEditItem,
    toggleTask,
    applyChange
  } = props;

  return (
    <div className={styles.post}>
      <div className={styles.post__checkbox}>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => toggleTask(id)}
        />
      </div>
      <div className={styles.post__wrapper}>
        <div className={styles.post__text}>
          {isEditItem == id ? (
            <Input
              eventFunc={changeTask}
              setFunc={setNewTask}
              task={newTask}
              id={id}
              text={text}
              isCompleted={isCompleted}
              buttonFunc={applyChange}
            />
          ) : (
            <div
              style={{
                opacity: isCompleted && 0.4,
                textDecoration: isCompleted && "line-through",
              }}
            >
              {text}
            </div>
          )}
        </div>
        <div className={styles.post__buttons}>
          {!isCompleted && (
            <Button
              img="src/img/edit-img.svg"
              eventFunc={changeInput}
              eventValue={[id, text]}
            />
          )}
          <Button
            img="src/img/cross-img.svg"
            eventFunc={removeTask}
            eventValue={id}
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
