import React from 'react'
import { Link } from 'react-router-dom';
import style from '../theory/theory.module.scss'

type Props = {}

export const TheoryHome = (props: Props) => {
  return (
    <div className={style.theory}>
      <h2 className={style.title}>Теория</h2>
      <ul className={style.cards}>
        <li className={style.card}>
            <img src="/1.png" alt="" />
            <Link to={`verb-forms`}>
                Времена глаголов
            </Link>
        </li>
        <li className={style.card}>
          <img src="/1.png" alt="" />
          <Link to={`verb`}>
            Глаголы
          </Link>
        </li>

      </ul>
    </div>

  )
}
