import styles from "./app.module.css";
import Input from "../input/input";
import Tasks from "../tasks/tasks";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_item, remove_item } from "../redux/Actions/todoAction";

function App() {
  const array = useSelector((store) => store.Todo.todoList);
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [newTask, setNewTask] = useState(task);

  const createTask = (e) => {
    let item = {
      id: array.length + 1,
      text: task,
      isActive: false,
    };

    if (e.key === "Enter") {
      dispatch(add_item(item));
      setTask("");
    }
  };

  const removeTask = (item) => {
    dispatch(remove_item(item));
  };

  const changeTask = (item) => {};

  return (
    <div className={styles.app}>
      <Input createTask={createTask} task={task} setTask={setTask} />
      <Tasks array={array} removeTask={removeTask} />
    </div>
  );
}

export default App;
