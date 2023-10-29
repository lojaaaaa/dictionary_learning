
import { Link } from 'react-router-dom';
import style from './verb-forms.module.scss'

type Props = {}

const verbFormsData = [
  {
    forms_id: 1,
    forms_name: 'Simple Forms',
    items: [
      {
        id: 1,
        name: 'Present Simple',
        description: 'Пример: Я читаю книгу.',
        forms_id: 1
      },
      {
        id: 2,
        name: 'Past Simple',
        description: 'Пример: Я прочитал книгу вчера.',
        forms_id: 1
      },
      {
        id: 3,
        name: 'Future Simple',
        description: 'Пример: Я прочитаю книгу завтра.',
        forms_id: 1
      }
    ]
  },
  {
    forms_id: 2,
    forms_name: 'Continous Forms',
    items: [
      {
        id: 4,
        name: 'Present Simple',
        description: 'Пример: Я читаю книгу прямо сейчас.',
        forms_id: 2
      },
      {
        id: 5,
        name: 'Past Simple',
        description: 'Пример: Я читал книгу вчера в это время.',
        forms_id: 2
      },
      {
        id: 6,
        name: 'Future Simple',
        description: 'Пример: Я буду читать книгу завтра в это время.',
        forms_id: 2
      }
    ]
  },
  {
    forms_id: 3,
    forms_name: 'Perfect Forms',
    items: [
      {
        id: 7,
        name: 'Present Simple',
        description: 'Пример: Я уже прочитал книгу.',
        forms_id: 3
      },
      {
        id: 8,
        name: 'Past Simple',
        description: 'Пример: Я прочитал книгу до этого момента.',
        forms_id: 3
      },
      {
        id: 9,
        name: 'Future Simple',
        description: 'Пример: Я прочитаю книгу до этого момента.',
        forms_id: 3
      }
    ]
  },
  {
    forms_id: 4,
    forms_name: 'Perfect Continuous Forms',
    items: [
      {
        id: 10,
        name: 'Present Simple',
        description: 'Пример: Я уже долгое время читаю книгу.',
        forms_id: 4
      },
      {
        id: 11,
        name: 'Past Simple',
        description: 'Пример: Я долгое время читал книгу вчера.',
        forms_id: 4
      },
      {
        id: 12,
        name: 'Future Simple',
        description: 'Пример: Я буду долгое время читать книгу завтра.',
        forms_id: 4
      }
    ]
  }
];

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
                <p className={style.text}>{item.description}</p>
                <Link to={`/theory/verb-forms/forms-${item.forms_id}/${item.id}`} className={style.link}>Подробнее</Link>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  )
}
