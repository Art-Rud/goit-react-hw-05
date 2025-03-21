import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";
import clsx from "clsx";
const getLinkStyles = ({ isActive }) => {
  return clsx(style.link, isActive && style.active);
};
function Navigation() {
  return (
    <>
      <header>
        <nav>
          <ul className={style.list}>
            <NavLink to={"/"} className={getLinkStyles}>
              <li>Home</li>
            </NavLink>
            <NavLink to={"/movies"} className={getLinkStyles}>
              <li>Movies</li>
            </NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Navigation;
