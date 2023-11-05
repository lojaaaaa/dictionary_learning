
import { Link } from 'react-router-dom';
import style from './verb-forms.module.scss'
import { verbFormsData } from 'src/shared/config';


type Props = {}


export const VerbForms = (props: Props) => {
  return (
    <>
      {verbFormsData.map(el => (
        <div key={el.forms_id}>
          <h2 className={style.title}>{el.forms_name}</h2>
          <div className={style.cards}>
            {el.items.map(item => 
              <div key={item.id} className={style.card}>
                <h3 className={style.cardTitle}>{item.name}</h3>
                <p className={style.text}>{item.example}</p>
                <Link to={`/theory/verb-forms/${item.forms_id}/${item.id}`} className={style.link}>Подробнее</Link>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  )
}
