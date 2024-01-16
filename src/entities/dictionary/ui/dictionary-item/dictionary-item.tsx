import { useState } from 'react';
import { removeDictionaryWord, updateDictionaryWord } from '../../model';
import style from './dictionary-item.module.scss'
import { listenTranslate } from 'src/shared/libs/saveToLocalStorage';


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

  const [isEditItem, setIsEditItem] = useState<boolean>(false)

  const [editedOriginalText, setEditedOriginalText] = useState<string>(originalText)
  const [editedTranscription, setEditedTranscription] = useState<string>(transcription)
  const [editedTranslatedText, setEditedTranslatedText] = useState<string>(translatedText)


  const handleListen = () =>{
    listenTranslate(originalText)
  }

  const handleRemove = () =>{
    removeDictionaryWord(id)
  }

  const handleUpdate = () =>{
    setIsEditItem(prev => !prev)
    const editedDictionaryWord = 
    { 
      id,
      originalText: editedOriginalText, 
      transcription: editedTranscription, 
      translatedText: editedTranslatedText
    }
    updateDictionaryWord(editedDictionaryWord)
  }

  const handleToggleUpdate = () =>{
    setIsEditItem(prev => !prev)
    if(isEditItem){
      setEditedOriginalText(originalText)
      setEditedTranscription(transcription)
      setEditedTranslatedText(translatedText)
    }
  }

  return (
    <li className={style.item}>
      <div className='flex gap-8'>
        <img 
          onClick={handleListen} 
          className={style.listen} 
          src="./listen.svg" 
          alt="listen" 
        />

        <input 
          readOnly={!isEditItem} 
          className={style.originalText} 
          value={editedOriginalText} 
          onChange={e => setEditedOriginalText(e.target.value)}
        />
      </div>

      <span className={style.dash}>-</span>

      <input 
        readOnly={!isEditItem} 
        className={style.transcription} 
        value={editedTranscription} 
        onChange={e => setEditedTranscription(e.target.value)}
      />
      <span className={style.dash}>-</span>

      <input 
        readOnly={!isEditItem} 
        className={style.translatedText} 
        value={editedTranslatedText} 
        onChange={e => setEditedTranslatedText(e.target.value)}
      />

      {
        isEditItem && 
        <img onClick={handleUpdate} className={style.mark} src="./mark.svg" alt="mark"/>
      }

      <img 
        onClick={handleToggleUpdate} 
        className={style.edit} 
        src="./editWord.svg" 
        alt="edit"
      />
      <img 
        onClick={handleRemove} 
        className={style.remove} 
        src="./krest.svg" 
        alt="krest" 
      />
    </li>
  )
}

