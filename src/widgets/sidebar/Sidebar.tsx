import { NavLink, useLocation } from "react-router-dom";
import style from './sidebar.module.scss'
import { HomeIcon, DictionaryIcon, KnowledgeIcon } from "src/shared/ui/icons";

export const Sidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    let activeItem
    if(path !== '/'){
      activeItem = location.pathname.includes(path)? style.active : style.item
    }
    else{
      activeItem = location.pathname === path ? style.active : style.item
    }

    return activeItem;
  };

  return (
    <header className={style.sidebar}>
      <NavLink to={`/`} className={isActive('/')}>
        <HomeIcon size="l"/>
      </NavLink>
      <ul className={style.list}>
        <li className={isActive('/theory')}>
          <NavLink to={`/theory`}>
          <KnowledgeIcon size="l"/>
          </NavLink>
        </li>
        <li className={isActive('/dictionary')}>
          <NavLink to={`/dictionary`}>
            <DictionaryIcon size="l"/>
          </NavLink>
        </li>
      </ul>
    </header>
  )
}
