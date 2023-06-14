import styles from "./app.module.css";
import Input from "../input/input";
import Tasks from "../tasks/tasks";
import Filters from "../filters/filters";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  add_item,
  remove_item,
  edit_item,
  toggle_item,
} from "../../redux/Actions/todoAction";

const App = () => {
  let array = useSelector((store) => store.TodoReducer.todoList);
  const dispatch = useDispatch();

  const [task, setTask] = useState("");
  const [newTask, setNewTask] = useState("");
  const [isEditItem, setIsEditItem] = useState();

  const createTask = (e) => {
    let item = {
      id: array.length + 1,
      text: task,
      isCompleted: false,
    };
    if (e.key === "Enter") {
      dispatch(add_item(item));
      setTask("");
    }
  };
  const applyCreate = () => {
    let item = {
      id: array.length + 1,
      text: task,
      isCompleted: false,
    };

    dispatch(add_item(item));
    setTask("");
  };

  const changeTask = (e, id, isCompleted) => {
    let item = {
      id,
      text: newTask,
      isCompleted,
    };
    if (e.key === "Enter") {
      dispatch(edit_item(item));
      setNewTask("");
      setIsEditItem();
    } else if (e.key === "Escape") {
      setNewTask("");
      setIsEditItem();
    }
  };
  const applyChange = (id, isCompleted) => {
    let item = {
      id,
      text: newTask,
      isCompleted,
    };
    dispatch(edit_item(item));
    setNewTask("");
    setIsEditItem();
  };

  const toggleTask = (id) => {
    dispatch(toggle_item(id));
  };

  const removeTask = (item) => {
    dispatch(remove_item(item));
  };

  const changeInput = ([id, text]) => {
    setIsEditItem(id);
    setNewTask(text)
  };

  return (
    <div className={styles.app}>
      <div>
        <Input
          eventFunc={createTask}
          setFunc={setTask}
          task={task}
          text="Введите текст задачи"
          buttonFunc={applyCreate}
        />
        <Filters />
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
        applyChange={applyChange}
      />
    </div>
  );
};

export default App;
