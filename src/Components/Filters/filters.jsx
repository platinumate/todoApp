import styles from "./filters.module.css";
import { visibilityFilters, themes } from "../../redux/Constants/constants";
import { change_filter } from "../../redux/Actions/visibilityAction";
import { change_theme } from "../../redux/Actions/themeAction";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Filters = (props) => {
  const { newTheme } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    const themeSuffix = newTheme === "LIGHT_THEME" ? "light" : "dark";

    const bgColor1 = `var(--bg-color-1-${themeSuffix})`;
    const bgColor2 = `var(--bg-color-2-${themeSuffix})`;
    const bgColor3 = `var(--bg-color-3-${themeSuffix})`;
    const bgColor3Hover = `var(--bg-color-3-hover-${themeSuffix})`;
    const bgColor4 = `var(--bg-color-4-${themeSuffix})`;
    const color = `var(--color-${themeSuffix})`;
    const shadow = `var(--shadow-${themeSuffix})`;

    document.body.style.setProperty("--bg-color-1", bgColor1);
    document.body.style.setProperty("--bg-color-2", bgColor2);
    document.body.style.setProperty("--bg-color-3", bgColor3);
    document.body.style.setProperty("--bg-color-3-hover", bgColor3Hover);
    document.body.style.setProperty("--bg-color-4", bgColor4);
    document.body.style.setProperty("--color", color);
    document.body.style.setProperty("--shadow", shadow);
  }, [newTheme]);

  const changeFilter = (filter) => {
    dispatch(change_filter(filter));
  };

  const changeTheme = (theme) => {
    dispatch(change_theme(theme));
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
      <span>Тема:</span>
      <label>
        Светлая
        <input
          defaultChecked
          type="radio"
          name="themes"
          onChange={() => changeTheme(themes.LIGHT_THEME)}
        />
      </label>
      <label>
        Тёмная
        <input
          type="radio"
          name="themes"
          onChange={() => changeTheme(themes.DARK_THEME)}
        />
      </label>
    </div>
  );
};

export default Filters;
