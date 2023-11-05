import React from 'react'
import style from './verb-form.module.scss'
import { useStore } from 'effector-react'
import { $currentVerbForms } from 'src/entities/theory/module'

type Props = {}

export const VerbForm = (props: Props) => {

  const currentForm = useStore($currentVerbForms)
  const formName = currentForm.name
  console.log(currentForm)

  return (
    <div className={style.wrapper}>
      <section className={style.section}>
        <h3 className={style.title}>{formName} - простое настоящее время</h3>
        <div className={style.content}>
          <p className={style.text}>{currentForm.description}</p>
          <ul className={style.examples}>
            {currentForm.examples.map(el => 
              <li key={el.id}>
                <p className={style.examplesTitle}>{el.original}</p>
                <p className={style.exapmlesText}>{el.translated}</p>
              </li>
            )}
          </ul>
        </div>
      </section>
      <section className={style.section}>
        <h3 className={style.title}>Образование {formName}</h3>
        <div className={style.content}>
          {currentForm.formation.map(el => 
            <div>
              <h4>{el.name}</h4>
              <ul className={style.examples}>
                {el.list.map(el =>
                  <li>
                    <p className={style.exapmlesText}>{el.rule}</p>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </section>
      <section className={style.section}>
        <h3 className={style.title}>Употрбление {formName}</h3>
        <ul className={style.content}>
          <li>
            <h5>Регулярные, повторяющиеся действия:</h5>
            <ul className={style.examples}>
              <li>
                <p className={style.examplesTitle}>I live in London</p>
                <p className={style.exapmlesText}>Я живу в Лондоне</p>
              </li>
            </ul>
          </li>
          <li>
            <h5>Действие в настоящем в широком смысле слова:</h5>
            <ul className={style.examples}>
              <li>
                <p className={style.examplesTitle}>The meeting starts at 6 o'clock</p>
                <p className={style.exapmlesText}>Собрание начинается в шесть часов</p>
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section className={style.section}>
        <h3 className={style.title}>Примеры {formName}</h3>
        <p>Тут будет больше примеров</p>
      </section>
    </div>
  )
}
