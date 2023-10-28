import { reflect } from "@effector/reflect"
import { FC, useState } from "react"

import { IDictionary } from "src/entities/dictionary/model";
import { DictionaryItem, dictionaryEntity } from 'src/entities/dictionary/index';

import style from './dictionary.module.scss'




interface DictionaryProps {
  dictionaryWords: IDictionary[];
  addDictionaryWord: (dictionaryWord: IDictionary) => void;
  addToTranslate: (dictionaryWord: IDictionary) => void;
}

export const DictionaryView: FC<DictionaryProps> = ({
  dictionaryWords,
  addDictionaryWord,
  addToTranslate
  }) =>{

  const [originalText, setOriginalText] = useState<string>('')
  const [transcription, setTranscription] = useState<string>('')
  const [translatedText, setTranslatedText] = useState<string>('')

  const handleClickAdd = () =>{
    const newWord = 
      { 
        id: '',
        originalText, 
        transcription: `[${transcription}]`, 
        translatedText 
      }

    if(translatedText){
      addDictionaryWord(newWord)
    }
    else{
      addToTranslate(newWord)
    }
    setOriginalText('')
    setTranscription('')
    setTranslatedText('')
  }

  return (
    <div className={style.wrapper}>
      <form className={style.form} onSubmit={e => e.preventDefault()}>
        <div className={style.inputs}>
          <input 
            value={originalText} 
            onChange={e => setOriginalText(e.target.value)} 
            type="text" 
            placeholder="Слово"
          />
          <input
            value={transcription}  
            onChange={e => setTranscription(e.target.value)} 
            type="text" 
            placeholder="Транскрипция"
          />
          <input 
            value={translatedText} 
            onChange={e => setTranslatedText(e.target.value)} 
            type="text" 
            placeholder="Перевод"
          />
        </div>
        <button onClick={handleClickAdd}>Добавить слово</button>
      </form>
      <ul className={style.list}>
        {
          dictionaryWords?.length > 0 &&
          <>
            <h2>Cписок слов: {dictionaryWords.length}</h2>
            {dictionaryWords?.map(el =>
              <DictionaryItem 
                id={el.id}
                key={el.id} 
                originalText={el.originalText}
                transcription={el.transcription}
                translatedText={el.translatedText}
              />
            )}
          </>
        }
      </ul>
    </div>
  )
}

export const Dictionary = reflect({
  view: DictionaryView,
  bind: {
    dictionaryWords: dictionaryEntity.$dictionaryWords,
    addDictionaryWord: dictionaryEntity.addDictionaryWord,
    addToTranslate: dictionaryEntity.addToTranslate
  },
});
