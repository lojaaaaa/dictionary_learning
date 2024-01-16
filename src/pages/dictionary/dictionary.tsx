import { reflect } from "@effector/reflect"
import { FC, useEffect, useState } from "react"

import { IDictionary } from "src/entities/dictionary/model";
import { DictionaryItem, dictionaryEntity } from 'src/entities/dictionary/index';
import {AddDictionaryWordButton} from 'src/features/addDictionaryWord/ui/AddDictionaryWordButton';
import Pagination from 'src/shared/ui/pagination/Pagination';

import style from './dictionary.module.scss'


interface DictionaryProps {
  dictionaryWords: IDictionary[];
}

export const DictionaryView: FC<DictionaryProps> = ({dictionaryWords}) =>{

  useEffect(() => {
    setFilteredDictionaryWords(dictionaryWords);
  }, [dictionaryWords])

  const [isSortByAlphabet, setIsSortByAlphabet] = useState(false);
  const [isSortBoAlphabet, setIsSortBoAlphabet] = useState(false);
  const [isSortByDate, setIsSortByDate] = useState(true);

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
    setIsSortByAlphabet(true);
    setIsSortBoAlphabet(false);
    setIsSortByDate(false);
  }

  const handleSortBoAlphabet = () => {
    let sortedDictionaryWords: IDictionary[] = [];
    sortedDictionaryWords = [...filteredDictionaryWords]
      .sort((a, b) =>b.originalText.localeCompare(a.originalText));

    setFilteredDictionaryWords(sortedDictionaryWords);
    setIsSortByAlphabet(false);
    setIsSortBoAlphabet(true);
    setIsSortByDate(false);
  }

  const handleSortByDate = () => {
    setFilteredDictionaryWords(dictionaryWords);
    setIsSortByAlphabet(false);
    setIsSortBoAlphabet(false);
    setIsSortByDate(true);
  }

  const handleFindDictionaryWord = () => {
    if(searchValue){
      setFilteredDictionaryWords(
        dictionaryWords.filter((d) => d.originalText.includes(searchValue))
      );
      setCurrentPage(1);
    }

  }
  
  return (
    <div className={style.wrapper}>
      <div className=" mt-8 mb-8">
        <div>
          {/* <h2>Поиск слова</h2> */}
          <div className="flex justify-end gap-4">
            <input 
              className={style.input}
              value={searchValue} 
              onChange={(e) => setSearchValue(e.target.value)} 
              type="text" 
              placeholder="Поиск слова"
            />
            <button onClick={handleFindDictionaryWord}>
              Поиск
            </button>
          </div>
        </div>
      </div>


      <div>
        {
          filteredDictionaryWords?.length > 0
          ? 
            <>
              <ul className={style.list}>
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-4">
                    <h3 className={style.title}>Показано слов: {currentWordIndex} из {filteredDictionaryWords.length}</h3>
                    <AddDictionaryWordButton />
                  </div>
                  <div className="flex items-center gap-4">
                    <button className={style.button} onClick={handleSortByAlphabet} disabled={isSortByAlphabet}>По алфавиту ↑</button>
                    <button className={style.button} onClick={handleSortBoAlphabet} disabled={isSortBoAlphabet}>По алфавиту ↓</button>
                    <button className={style.button} onClick={handleSortByDate} disabled={isSortByDate}>По дате ↑</button>
                  </div>
                </div>
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
  },
});
