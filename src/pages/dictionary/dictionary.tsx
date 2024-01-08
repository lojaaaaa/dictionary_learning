import { reflect } from "@effector/reflect"
import { FC, useEffect, useState } from "react"

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

  useEffect(() => {
    setFilteredDictionaryWords(dictionaryWords)
  }, [dictionaryWords])

  const originalTextError = errors.originalText ? 'Напишите слово' : '';

  const [searchValue, setSearchValue] = useState('');
  const [filteredDictionaryWords, setFilteredDictionaryWords] = useState(dictionaryWords);

  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 8;

  const lastWordIndex = currentPage * perPage;
  const firstWordIndex = lastWordIndex - perPage;
  const currentWordIndex = 
    lastWordIndex > filteredDictionaryWords.length 
      ? lastWordIndex - perPage + filteredDictionaryWords.length % perPage
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

  const handleFindDictionaryWord = () => {
    setFilteredDictionaryWords(
      dictionaryWords.filter((d) => d.originalText.includes(searchValue))
    )
    setCurrentPage(1);
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

      <div className="mt-8 mb-8">
        <h2>Поиск слова</h2>
        <div className="flex justify-center gap-4">
          <input 
            value={searchValue} 
            onChange={(e) => setSearchValue(e.target.value)} 
            type="text" 
            placeholder="Найти английское слово"
          />
          <button onClick={handleFindDictionaryWord}>Поиск</button>
        </div>

      </div>

      <div>
        {
          filteredDictionaryWords?.length > 0
          ? 
            <>
              <ul className={style.list}>
                <h2>Cписок слов: {currentWordIndex}/{filteredDictionaryWords.length}</h2>
                {displayedDictionaryWords?.map(el =>
                  <DictionaryItem 
                    id={el.id}
                    key={el.id} 
                    originalText={el.originalText}
                    transcription={el.transcription}
                    translatedText={el.translatedText}
                  />
                )}
              </ul>
              <Pagination 
                totalCount={filteredDictionaryWords.length}
                perPage={perPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </>
          : <p>Пока здесь пусто</p>
        }
      </div>

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
