import React, { useState } from 'react'
import style from './home.module.scss'

type Props = {}

const getEnglishApi = async (word) => {
  const url = `https://dictionary.skyeng.ru/api/public/v1/words/search?search=${word}`
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
}


export const Home = (props: Props) => {

  const handleClick = () =>{
    getEnglishApi(value)
  }

  const [value, setValue] = useState('')

  return (
    <>
        <h2 className={style.title}>HomePage</h2>
        <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
        <button onClick={handleClick}>Кнопка</button>
    </>

  )
}
