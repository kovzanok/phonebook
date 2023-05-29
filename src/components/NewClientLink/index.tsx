import { NavLink } from "react-router-dom";
import classNames from "./NewClientLink.module.css";

export default function NewClientLink() {
  return (
    <NavLink className={Object.values(classNames).join(" ")} to='/new'>
      + Добавить потребителя
    </NavLink>
  );
}
