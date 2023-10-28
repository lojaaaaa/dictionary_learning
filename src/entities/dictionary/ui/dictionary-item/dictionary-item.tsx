import { removeDictionaryWord } from '../../model';
import style from './dictionary-item.module.scss'


interface PropsTranslateItem {
  id: string,
  originalText: string,
  transcription: string,
  translatedText: string
}

export const DictionaryItem = ({
  id,
  originalText, 
  transcription, 
  translatedText
}: PropsTranslateItem) => {

  const listenTranslate = () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(originalText);
    synth.speak(utterance);
  };

  const handleRemove = () =>{
    removeDictionaryWord(id)
  }


  return (
    <li className={style.item}>
      <img onClick={listenTranslate} className={style.listen} src="./listen.svg" alt="listen" />
      <p className={style.originalText}>{originalText}</p>
      <span>-</span>
      <p className={style.transcription}>{transcription}</p>
      <span>-</span>
      <p className={style.translatedText}>{translatedText}</p>
      <img onClick={handleRemove} className={style.remove} src="./krest.svg" alt="krest" />
    </li>
  )
}

