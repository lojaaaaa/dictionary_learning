import { removeWord } from '../../pages/model';
import style from './translate-item.module.scss'
import { useRef } from 'react';


interface PropsTranslateItem {
  id: number,
  originalText: string,
  transcription: string,
  translatedText: string
}

const TranslateItem = ({
  id,
  originalText, 
  transcription, 
  translatedText
}: PropsTranslateItem) => {


  const value = useRef('')

  const listenTranslate = () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(value.current.innerText);
    synth.speak(utterance);
  };

  const handleRemove = () =>{
    removeWord(id)
  }

  return (
    <li className={style.item}>
      <h3 className={style.originalText} ref={value}>{originalText}</h3>
      <span>-</span>
      <p className={style.transcription}>{transcription}</p>
      <span>-</span>
      <p className={style.translatedText}>{translatedText}</p>
      <span onClick={listenTranslate} className={style.listen}>🔉</span>
      <span onClick={handleRemove} className={style.remove}>&#10006;</span>
    </li>
  )
}

export default TranslateItem