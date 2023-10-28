
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
        description: 'Пример: Я читаю книгу.'
      },
      {
        id: 2,
        name: 'Past Simple',
        description: 'Пример: Я прочитал книгу вчера.'
      },
      {
        id: 3,
        name: 'Future Simple',
        description: 'Пример: Я прочитаю книгу завтра.'
      }
    ]
  },
  {
    forms_id: 2,
    forms_name: 'Continous Forms',
    items: [
      {
        id: 1,
        name: 'Present Simple',
        description: 'Пример: Я читаю книгу прямо сейчас.'
      },
      {
        id: 2,
        name: 'Past Simple',
        description: 'Пример: Я читал книгу вчера в это время.'
      },
      {
        id: 3,
        name: 'Future Simple',
        description: 'Пример: Я буду читать книгу завтра в это время.'
      }
    ]
  },
  {
    forms_id: 3,
    forms_name: 'Perfect Forms',
    items: [
      {
        id: 1,
        name: 'Present Simple',
        description: 'Пример: Я уже прочитал книгу.'
      },
      {
        id: 2,
        name: 'Past Simple',
        description: 'Пример: Я прочитал книгу до этого момента.'
      },
      {
        id: 3,
        name: 'Future Simple',
        description: 'Пример: Я прочитаю книгу до этого момента.'
      }
    ]
  },
  {
    forms_id: 4,
    forms_name: 'Perfect Continuous Forms',
    items: [
      {
        id: 1,
        name: 'Present Simple',
        description: 'Пример: Я уже долгое время читаю книгу.'
      },
      {
        id: 2,
        name: 'Past Simple',
        description: 'Пример: Я долгое время читал книгу вчера.'
      },
      {
        id: 3,
        name: 'Future Simple',
        description: 'Пример: Я буду долгое время читать книгу завтра.'
      }
    ]
  },
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
                <a href='#' className={style.link}>Подробнее</a>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  )
}
