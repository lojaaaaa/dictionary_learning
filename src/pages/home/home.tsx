import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import style from './home.module.scss'
import { DrillPanel } from './drillPanel';

const sentences = [
  {
    id: '1',
    original: 'Я только что закончил свою домашнюю работу.',
    translated: 'I have just finished my homework',
    translatedWords: [
      { id: '1', text: 'I' },
      { id: '2', text: 'have' },
      { id: '3', text: 'just' },
      { id: '4', text: 'finished' },
      { id: '5', text: 'my' },
      { id: '6', text: 'homework' },
    ],
  },
  {
    id: '2',
    original: 'Они уже посетили этот музей.',
    translated: 'They have already visited this museum.',
    translatedWords: [
      { id: '1', text: 'They' },
      { id: '2', text: 'have' },
      { id: '3', text: 'already' },
      { id: '4', text: 'visited' },
      { id: '5', text: 'this' },
      { id: '6', text: 'museum' },
    ],
  },
  {
    id: '3',
    original: 'Мы никогда не путешествовали заграницу.',
    translated: 'We have never traveled abroad',
    translatedWords: [
      { id: '1', text: 'We' },
      { id: '2', text: 'have' },
      { id: '3', text: 'never' },
      { id: '4', text: 'traveled' },
      { id: '5', text: 'abroad' },
    ],
  },
  {
    id: '4',
    original: 'Она уже попробовала это блюдо.',
    translated: 'She has already tried this dish',
    translatedWords: [
      { id: '1', text: 'She' },
      { id: '2', text: 'has' },
      { id: '3', text: 'already' },
      { id: '4', text: 'tried' },
      { id: '5', text: 'this' },
      { id: '6', text: 'dish' },
    ],
  },
  {
    id: '5',
    original: 'Я никогда не видел такую красоту.',
    translated: 'I have never seen such beauty',
    translatedWords: [
      { id: '1', text: 'I' },
      { id: '2', text: 'have' },
      { id: '3', text: 'never' },
      { id: '4', text: 'seen' },
      { id: '5', text: 'such' },
      { id: '6', text: 'beauty' },
    ],
  },
];

const words = [
  {
    id: '1',
    text: 'He'
  },
  {
    id: '2',
    text: 'was'
  },
  {
    id: '3',
    text: 'a'
  },  
  {
    id: '4',
    text: 'good'
  }
]

type Props = {}



export const Home = (props: Props) => {

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const currentSentence = sentences[currentSentenceIndex];
  const [currentWords, setCurrentWords] = useState(currentSentence.translatedWords);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const updatedWords = [...currentWords];
    const [reorderedWord] = updatedWords.splice(result.source.index, 1);
    updatedWords.splice(result.destination.index, 0, reorderedWord);

    setCurrentWords(updatedWords);
  };

  const handleNextSentence = () => {
    // Переход к следующему вопросу (если есть)
    if (currentSentenceIndex < sentences.length - 1) {
      setCurrentSentenceIndex(currentSentenceIndex + 1);
      setCurrentWords(sentences[currentSentenceIndex + 1].translatedWords);
    }
  };

  const handleLastSentence = () => {
    // Переход к следующему вопросу (если есть)
    setCurrentSentenceIndex(0);
    setCurrentWords(sentences[0].translatedWords);
  };
  
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={style.wrapper}>
        <h1 className={style.title}>Тренажер</h1>
        <div className={style.content}>
          <div className={style.drillPanel}>
            <p className={style.drillTitle}>
              {currentSentence.original}
            </p>
            <p className={style.drillText}>
              {currentWords.map((word) => word.text).join(' ')}
            </p>
          </div>
          <Droppable direction="horizontal" droppableId="words">
            {(provided) => (
              <div 
                className={style.wordsList} 
                ref={provided.innerRef} 
                {...provided.droppableProps}
              >
                {currentWords.map((el, index) => (
                  <Draggable key={el.id} draggableId={el.id} index={index}>
                    {(provided) => (
                      <div
                        className={style.wordsItem}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <p>{el.text}</p>
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            )}
          </Droppable>
          {currentSentenceIndex < sentences.length - 1
          ?
            <button 
              className={style.buttonNext} 
              onClick={handleNextSentence}
            >
              Следующий вопрос
            </button>
          :             
            <button 
              className={style.buttonNext} 
              onClick={handleLastSentence}
            >
              Завершить
            </button>
          }
        </div>
      </div>
    </DragDropContext>

  )
}

