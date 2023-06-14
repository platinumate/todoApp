import styles from "./filters.module.css";
import { visibilityFilters } from "../../redux/Constants/Constants";
import { change_filter } from "../../redux/Actions/todoAction";
import { useDispatch } from "react-redux";

const Filters = () => {
  const dispatch = useDispatch();

  const changeFilter = (filter) => {
    dispatch(change_filter(filter));
  };
  
  return (
    <div className={styles.filters}>
      <span>Показывать:</span>
      <label>
        Все
        <input
          defaultChecked
          type="radio"
          name="filters"
          onChange={() => changeFilter(visibilityFilters.SHOW_ALL)}
        />
      </label>
      <label>
        Активные
        <input
          type="radio"
          name="filters"
          onChange={() => changeFilter(visibilityFilters.SHOW_ACTIVE)}
        />
      </label>
      <label>
        Выполненные
        <input
          type="radio"
          name="filters"
          onChange={() => changeFilter(visibilityFilters.SHOW_COMPLETED)}
        />
      </label>
    </div>
  );
};

export default Filters;
