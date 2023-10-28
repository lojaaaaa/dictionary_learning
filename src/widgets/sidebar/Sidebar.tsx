import { NavLink, useLocation } from "react-router-dom";
import style from './sidebar.module.scss'

export const Sidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    const activeItem = location.pathname === path ? style.active : style.item
    return activeItem;
  };

  return (
    <header className={style.sidebar}>
      <NavLink to={`/`} className={isActive('/')}>
        <img src="./home.svg" alt="home" />
      </NavLink>
      <ul className={style.list}>
        {/* <li className={isActive('/')} >
          <NavLink to={`/`}>
            <img src="./notification.svg" alt="notification" />
          </NavLink>
        </li> */}
        <li className={isActive('/theory')}>
          <NavLink to={`/theory`}>
            <img src="./knowledge.svg" alt="knowledge" />
          </NavLink>
        </li>
        <li className={isActive('/dictionary')}>
          <NavLink to={`/dictionary`}>
            <img src="./dictionary.svg" alt="dictionary" />
          </NavLink>
        </li>
      </ul>
    </header>
  )
}
