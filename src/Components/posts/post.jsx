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
  } = props;

  return (
    <div className={styles.post}>
      <div className={styles.post__checkbox}>
        <input type="checkbox" onClick={() => toggleTask(id)} />
      </div>
      <div className={styles.post__wrapper}>
        <div className={styles.post__text}>
          {isEditItem == id ? (
            <Input
              eventFunc={changeTask}
              setFunc={setNewTask}
              task={newTask}
              id={id}
              isCompleted={isCompleted}
            />
          ) : (
            <div style={{ opacity: isCompleted && 0.4 }}>{text}</div>
          )}
        </div>
        <div>dev Id {id}</div>
        <div className={styles.post__buttons}>
          <Button
            img="url(/public/cross-black-16px.png)"
            eventFunc={removeTask}
            eventValue={id}
          />
          {/* chnageInput вызов при нажатии */}
          {/* changeInput() вызов при рендере страницы */}
          {/* () => { changeInput() } вызов анонимной функции (callback) */}
          <Button
            img="url(/public/edit-black-16px.png)"
            eventFunc={changeInput}
            eventValue={id}
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
