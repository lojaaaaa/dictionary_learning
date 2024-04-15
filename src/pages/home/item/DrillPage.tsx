import React, { useState } from 'react'
import { Drill } from 'src/widgets/drill/drill'
import style from './DrillPage.module.scss'
import { useStore } from 'effector-react/effector-react.mjs'
import { $currentDrill } from '../model'
import { Link } from 'react-router-dom'



const DrillPage = () => {

  const [isClickedStart, setIsClickedStart] = useState(false);

  const currentData = useStore($currentDrill)

  return (
    <div className={style.wrapper}>
      <div className={style.drill}>
        <h1 className={style.title}>
          Тренажер
        </h1>
        {
          !isClickedStart && 
            <div className='flex justify-center gap-4'>
              <button 
                className={style.button} 
                onClick={() => setIsClickedStart(true)}
              >
                Начать прохождение
              </button>
              <Link to='/'>
                <button 
                  className={style.button} 
                >
                  Вернуться назад
                </button>
              </Link>
            </div>
        }
        {isClickedStart && <Drill items={currentData}/>}
      </div>

    </div>
  )
}

export default DrillPage