import { createEffect, createEvent, createStore } from "effector";
import { sample } from "effector/effector.mjs";
import { DICTIONARY_WORDS } from "src/shared/config";
import { saveToLocalStorage } from "src/shared/libs/saveToLocalStorage";
import { v4 as uuidv4 } from 'uuid';

const defaultData = JSON.parse(localStorage.getItem('dictionaryWords')) || 
  [] as IDictionary[] ;

export interface IDictionary{
  id: string,
  originalText: string,
  transcription: string,
  translatedText: string
}

export const $dictionaryWords = createStore<IDictionary[]>(defaultData);

export const updateDictionaryWord = createEvent<IDictionary>()
export const addDictionaryWord = createEvent<IDictionary>()
export const addToTranslate = createEvent<IDictionary>()
export const removeDictionaryWord = createEvent<string>()

export const getTranslatedTextFx = createEffect(async(word: IDictionary) => {
  try {
    // const url = `https://api.mymemory.translated.net/get?q=${word.originalText}!&langpair=EN|RU`
    const url = `https://dictionary.skyeng.ru/api/public/v1/words/search?search=${word.originalText}`
    const res = await fetch(url)
    const data = await res.json()
    return {
      ...word, 
      transcription: `[${data[0].meanings[0].transcription}]`, 
      translatedText: data[0].meanings[0].translation.text
    }
  } 
  catch (error) {
    throw new Error('Не удалось получить перевод');
  }
})


sample({
  clock: updateDictionaryWord,
  source: $dictionaryWords,
  fn: (words, newWord) => 
  saveToLocalStorage(
    words.map(word => word.id === newWord.id ? newWord : word), 
    DICTIONARY_WORDS
  ),
  target: $dictionaryWords, 
})


sample({
  clock: addToTranslate,
  fn: (word) => word,
  target: getTranslatedTextFx,
})

sample({
  clock: getTranslatedTextFx.doneData,
  source: $dictionaryWords,
  fn: (words, newWord) => 
    saveToLocalStorage(
      [
        {...newWord, id: uuidv4()}, 
        ...words
      ], 
      DICTIONARY_WORDS
    ),
  target: $dictionaryWords,
})

sample({
  clock: addDictionaryWord,
  source: $dictionaryWords,
  fn: (words, newWord) => 
    saveToLocalStorage(
      [
        {...newWord, id: uuidv4()}, 
        ...words
      ], 
      DICTIONARY_WORDS
    ),
  target: $dictionaryWords,
})

sample({
  clock: removeDictionaryWord,
  source: $dictionaryWords,
  fn: (words, id) => 
    saveToLocalStorage(
      words.filter(el => el.id !== id), 
      DICTIONARY_WORDS
    ),
  target: $dictionaryWords,
})