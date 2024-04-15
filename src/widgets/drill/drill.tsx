import { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import style from './drill.module.scss'
import { ErrorLabel } from 'src/shared/ui/error/ErrorLabel';
import { 
  $currentSentence, 
  $currentSentenceIndex, 
  $sentences, 
  $updatedCurrentSentence, 
  setCurrentSentence, 
  setSentences, 
  setUpdatedCurrentSentence, 
  updateCurrentSentenceIndex, 
  updateTranslatedWords 
} from './model';
import { useStore } from 'effector-react';
import { Link } from 'react-router-dom';

const shuffleArray = (array) => {
  return array.slice().sort(() => Math.random() - 0.5);
};

type Props = {
  items: any
}

export const Drill = ({items}: Props) => {

  useEffect(()=>{
    setSentences(items);
    setCurrentSentence(items[0]);
    setUpdatedCurrentSentence(items[0]);
  }, [])

  const sentences = useStore($sentences)
  const currentSentence = useStore($currentSentence)
  const updatedCurrentSentence = useStore($updatedCurrentSentence)
  const currentSentenceIndex = useStore($currentSentenceIndex)



  console.log(items)

  const [error, setError] = useState('')
  const [isClickedComplete, setIsClickedComplete] = useState(false)


  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const updatedTranslatedWords = [...updatedCurrentSentence.translatedWords];
    const [reorderedWord] = updatedTranslatedWords.splice(result.source.index, 1);
    updatedTranslatedWords.splice(result.destination.index, 0, reorderedWord);

    updateTranslatedWords({
        ...currentSentence, 
        translated: updatedTranslatedWords.map(el => el.text).join(' '), 
        translatedWords: updatedTranslatedWords
      })
  };

  const handleNextSentence = () => {
    if(currentSentence.translated === updatedCurrentSentence.translatedWords.map(el => el.text).join(' ') ){
      setError('')
      updateCurrentSentenceIndex(currentSentenceIndex + 1)
    }
    else{
      setError('Ошибка в составлении предложения')
    }
  };

  const handleLastSentence = () => {
    updateCurrentSentenceIndex(0)
    setIsClickedComplete(true)
  };
  
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {
        !isClickedComplete
        ? <div className={style.content}>
          <div className={style.drillPanel}>
            <p className={style.drillTitle}>
              {currentSentence.original}
            </p>
            <p className={style.drillText}>
              {updatedCurrentSentence.translatedWords.map((word) => word.text).join(' ')}
            </p>
          </div>
          <Droppable direction="horizontal" droppableId="words">
            {(provided) => (
              <div 
                className={style.wordsList} 
                ref={provided.innerRef} 
                {...provided.droppableProps}
              >
                {updatedCurrentSentence.translatedWords.map((el, index) => (
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
          {error ? <ErrorLabel>{error}</ErrorLabel> : null}
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
        : <div className='flex flex-col gap-6'>
            <p className='text-center text-xl'>Молодец, ты прошел!</p>
            <div className='flex justify-center gap-6'>
              <button 
                onClick={() => setIsClickedComplete(false)}>
                Пройти еще раз
              </button>
              <button>
                <Link to={`/`}>
                  Вернуться к тренажерам
                </Link>
              </button>
            </div>
          </div>
      }
    </DragDropContext>

  )
}


