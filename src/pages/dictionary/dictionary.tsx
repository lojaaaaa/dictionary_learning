import { reflect } from "@effector/reflect"
import { FC, useState } from "react"

import { IDictionary } from "src/entities/dictionary/model";
import { DictionaryItem, dictionaryEntity } from 'src/entities/dictionary/index';

import style from './dictionary.module.scss'
import { useForm } from "react-hook-form";
import { ErrorLabel } from "src/shared/ui/error/ErrorLabel";
import Pagination from './../../shared/ui/pagination/Pagination';


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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<any>({
    defaultValues: {
      originalText: '',
      transcription: '',
      translatedText: ''
    },
  });


  const handleForm = (data) =>{
    if(data.translatedText){
      addDictionaryWord(data)
    }
    else{
      addToTranslate(data)
    }
    reset()
  }

  const originalTextError = errors.originalText ? 'Напишите слово' : '';

  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | 'date'>('date');

  const [filteredDictionaryWords, setFilteredDictionaryWords] = useState(dictionaryWords);

  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 8;

  const lastWordIndex = currentPage * perPage;
  const firstWordIndex = lastWordIndex - perPage;
  const currentWordIndex = 
    lastWordIndex > dictionaryWords.length 
      ? lastWordIndex - perPage + dictionaryWords.length % perPage
      : lastWordIndex

  const displayedDictionaryWords = filteredDictionaryWords.slice(firstWordIndex, lastWordIndex);


  const handleSortByAlphabet = () => {
    let sortedDictionaryWords: IDictionary[] = [];
    sortedDictionaryWords = [...filteredDictionaryWords]
      .sort((a, b) =>a.originalText.localeCompare(b.originalText));

    setFilteredDictionaryWords(sortedDictionaryWords);
  }

  const handleSortBoAlphabet = () => {
    let sortedDictionaryWords: IDictionary[] = [];
    sortedDictionaryWords = [...filteredDictionaryWords]
      .sort((a, b) =>b.originalText.localeCompare(a.originalText));

    setFilteredDictionaryWords(sortedDictionaryWords);
  }

  const handleSortByDate = () => {
    setFilteredDictionaryWords(dictionaryWords);
  }
  

  return (
    <div className={style.wrapper}>
      <form className={style.form} onSubmit={handleSubmit(handleForm)}>
        <div className={style.inputs}>
          <div>
            <input 
              type="text" 
              placeholder="Слово"
              {...register('originalText', { required: true })}
            />
            {originalTextError ? <ErrorLabel>{originalTextError}</ErrorLabel> : null}
          </div>
          <div>
            <input
              type="text" 
              placeholder="Транскрипция"
              {...register('transcription', { required: false })}
            />
          </div>
          <div>
            <input 
              type="text" 
              placeholder="Перевод"
              {...register('translatedText', { required: false })}
            />
          </div>
        </div>
        <button>Добавить слово</button>
      </form>
      <div className="mt-8 mb-8">
        <h2>Фильтровать</h2>
        <div className="flex justify-center gap-4">
          <button onClick={handleSortByAlphabet}>По алфавиту</button>
          <button onClick={handleSortBoAlphabet}>В обратном порядке</button>
          <button onClick={handleSortByDate}>По дате </button>
        </div>
      </div>

      <ul className={style.list}>
        {
          dictionaryWords?.length > 0 &&
          <>
            <h2>Cписок слов: {currentWordIndex}/{dictionaryWords.length}</h2>
            {displayedDictionaryWords?.map(el =>
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
      <Pagination 
        totalCount={dictionaryWords.length}
        perPage={perPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
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
