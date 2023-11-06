import { createEvent, createStore } from "effector";
import { sample } from "effector/effector.mjs";

const defaultData = [
  {
    id: '1',
    original: 'Я только что закончил свою домашнюю работу.',
    translated: 'I have just finished my homework',
    translatedWords: [
      { id: '4', text: 'finished' },
      { id: '6', text: 'homework' },
      { id: '3', text: 'just' },
      { id: '2', text: 'have' },
      { id: '5', text: 'my' },
      { id: '1', text: 'I' },
    ],
  },
  {
    id: '2',
    original: 'Они уже посетили этот музей.',
    translated: 'They have already visited this museum',
    translatedWords: [
      { id: '1', text: 'They' },
      { id: '4', text: 'visited' },
      { id: '6', text: 'museum' },
      { id: '2', text: 'have' },
      { id: '5', text: 'this' },
      { id: '3', text: 'already' },
    ],
  },
  {
    id: '3',
    original: 'Мы никогда не путешествовали заграницу.',
    translated: 'We have never traveled abroad',
    translatedWords: [
      { id: '3', text: 'never' },
      { id: '4', text: 'traveled' },
      { id: '5', text: 'abroad' },
      { id: '2', text: 'have' },
      { id: '1', text: 'We' },
    ],
  },
  {
    id: '4',
    original: 'Она уже попробовала это блюдо.',
    translated: 'She has already tried this dish',
    translatedWords: [
      { id: '4', text: 'tried' },
      { id: '2', text: 'has' },
      { id: '1', text: 'She' },
      { id: '6', text: 'dish' },
      { id: '5', text: 'this' },
      { id: '3', text: 'already' },
    ],
  },
  {
    id: '5',
    original: 'Я никогда не видел такую красоту.',
    translated: 'I have never seen such beauty',
    translatedWords: [
      { id: '2', text: 'have' },
      { id: '3', text: 'never' },
      { id: '6', text: 'beauty' },
      { id: '5', text: 'such' },
      { id: '4', text: 'seen' },
      { id: '1', text: 'I' },
    ],
  },
];


interface ITranslatedWord{
  id: string;
  text: string
}

interface ISentence {
  id: string;
  original: string;
  translated: string;
  translatedWords: ITranslatedWord[]
}


export const $sentences = createStore<ISentence[]>(defaultData)
export const $currentSentence = createStore<ISentence>(defaultData[0]);
export const $updatedCurrentSentence = createStore<ISentence>(defaultData[0]);
export const $currentSentenceIndex = createStore<number>(0);

export const updateTranslatedWords = createEvent();
export const updateCurrentSentenceIndex = createEvent<number>();

sample({
  clock: updateCurrentSentenceIndex,
  source: $sentences,
  fn: (sentences, sentenceIndex) => sentences[sentenceIndex],
  target: $currentSentence
})

sample({
  clock: updateCurrentSentenceIndex,
  source: $sentences,
  fn: (sentences, sentenceIndex) => sentences[sentenceIndex],
  target: $updatedCurrentSentence
})

sample({
  clock: updateTranslatedWords,
  fn: (updatedSentence) => updatedSentence,
  target: $updatedCurrentSentence,
});


sample({
  clock: updateCurrentSentenceIndex,
  fn: (index) => index,
  target: $currentSentenceIndex,
});

