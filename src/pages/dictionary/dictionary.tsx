import { useState } from "react"
import TranslateItem from "../../widgets/translate-item/translate-item"
import { $words, addNewWord } from "../model"
import { useStore } from "effector-react"

async function fetchData(text) {
  console.log(text)
  const url = `https://api.mymemory.translated.net/get?q=${text}!&langpair=EN|RU`
  const res = await fetch(url)
  const data = await res.json()
  console.log(data)
}


export const Dictionary = () =>{

  const data = useStore($words)
  

  const [originalText, setOriginalText] = useState('')
  const [transcription, setTranscription] = useState('')
  const [translatedText, setTranslatedText] = useState('')

  const handleClick = () =>{
    const newWord = {id: data.length + 1, originalText, transcription: `[${transcription}]`, translatedText }
    addNewWord(newWord)
  }


  return (
    <section className="section">
      <ul className="list">
        <form className="form" onSubmit={e => e.preventDefault()}>
            <div className="inputs">
              <input 
                value={originalText} 
                onChange={e => setOriginalText(e.target.value)} 
                type="text" 
                placeholder="Слово"/>
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
                placeholder="Перевод"/>
            </div>
            <button onClick={handleClick}>Добавить слово</button>
        </form>
        <h2>Мой список слов: {data.length}</h2>
          {data.map(el =>
            <TranslateItem 
              id={el.id}
              key={el.id} 
              originalText={el.originalText}
              transcription={el.transcription}
              translatedText={el.translatedText}
            />
          )}
      </ul>
    </section>
  )
}

