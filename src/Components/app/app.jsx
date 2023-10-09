import styles from "./app.module.css";
import Input from "../input/input";
import Tasks from "../tasks/tasks";
import Filters from "../Filters/filters";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  add_item,
  remove_item,
  edit_item,
  toggle_item,
} from "../../redux/Actions/todoAction";

const App = () => {
  let newTheme = useSelector((store) => store.themeReducer.currentTheme);
  let filter = useSelector((store) => store.visibilityReducer.visibilityFilter);
  let array = useSelector((store) => store.todoReducer.todoList);
  const dispatch = useDispatch();

  const [task, setTask] = useState("");
  const [newTask, setNewTask] = useState("");
  const [isEditItem, setIsEditItem] = useState();

  const createTask = (e, isApplyCreate) => {
    let item = {
      id: array.length + 1,
      text: task,
      isCompleted: false,
    };
    if (e.key === "Enter" || isApplyCreate) {
      dispatch(add_item(item));
      setTask("");
    }
  };

  const changeTask = (e, isApplyChange, id, isCompleted) => {
    let item = {
      id,
      text: newTask,
      isCompleted,
    };
    if (e.key === "Enter" || isApplyChange) {
      dispatch(edit_item(item));
      setNewTask("");
      setIsEditItem();
    } else if (e.key === "Escape") {
      setNewTask("");
      setIsEditItem();
    }
  };

  const toggleTask = (id) => {
    dispatch(toggle_item(id));
  };

  const removeTask = (item) => {
    dispatch(remove_item(item));
  };

  const changeInput = ([id, text]) => {
    setIsEditItem(id);
    setNewTask(text);
  };

  return (
    <div className={styles.app}>
      <div className={styles.app__header}>
        <Input
          text="Введите текст задачи"
          eventFunc={createTask}
          setFunc={setTask}
          task={task}
          buttonFunc={createTask}
          newTheme={newTheme}
        />
        <Filters newTheme={newTheme} />
      </div>
      <Tasks
        array={array}
        removeTask={removeTask}
        changeTask={changeTask}
        setNewTask={setNewTask}
        newTask={newTask}
        changeInput={changeInput}
        isEditItem={isEditItem}
        toggleTask={toggleTask}
        filter={filter}
        newTheme={newTheme}
      />
    </div>
  );
};

export default App;
