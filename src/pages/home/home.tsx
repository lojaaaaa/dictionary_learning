import { Drill } from 'src/widgets/drill/drill';
import style from './home.module.scss'
import { Link } from 'react-router-dom';
import { drillsData } from 'src/shared/config';

export const Home = () => {

  return (
    <div className={style.content}>
      <h2 className={style.title}>Тренажеры</h2>
      <ul className={style.cards}>
        {drillsData.map(el => 
          <li key={el.drill_id} className={style.card}>
            <Link to={`drill/${el.drill_id}`}>
              {el.drill_name}
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}

