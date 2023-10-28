import { createEvent, createStore } from "effector";
import { dictionary } from "../shared/config";
import { sample } from "effector/effector.mjs";

interface Idictionary{
  id: number,
  originalText: string,
  transcription: string,
  translatedText: string
}

// const defaultData = JSON.parse(localStorage.getItem('words') || dictionary) as Idictionary[];
export const $words = createStore<Idictionary[]>([]);

export const addNewWord = createEvent<Idictionary>()
export const removeWord = createEvent<number>()


const saveToLocalStorage  = (array) =>{
  localStorage.setItem('words', JSON.stringify(array))
  return array
}

sample({
  clock: addNewWord,
  source: $words,
  fn: (words, newWord) => saveToLocalStorage([newWord, ...words]),
  target: $words,
})

sample({
  clock: removeWord,
  source: $words,
  fn: (words, id) => saveToLocalStorage(words.filter(el => el.id !== id)),
  target: $words,
})
