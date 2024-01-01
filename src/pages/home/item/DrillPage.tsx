import React, { useState } from 'react'
import { Drill } from 'src/widgets/drill/drill'
import style from './DrillPage.module.scss'
import { useStore } from 'effector-react/effector-react.mjs'
import { $currentDrill } from '../model'

type Props = {}

const DrillPage = (props: Props) => {

  const [isClickedStart, setIsClickedStart] = useState(false);

  const currentData = useStore($currentDrill)
  console.log(currentData)

  return (
    <div>
      {!isClickedStart && <button className={style.button} onClick={() => setIsClickedStart(true)}>Начать прохождение</button>}
      {isClickedStart && <Drill items={currentData}/>}
    </div>
  )
}

export default DrillPage