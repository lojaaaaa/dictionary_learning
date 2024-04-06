import { reflect } from "@effector/reflect"
import { FC, useEffect, useState } from "react"

import { IDictionary } from "src/entities/dictionary/model";
import { DictionaryItem, dictionaryEntity } from 'src/entities/dictionary/index';
import { AddDictionaryWordButton } from 'src/features/addDictionaryWord/ui/AddDictionaryWordButton';
import Search from 'src/widgets/search/search';
import Pagination from 'src/shared/ui/pagination/Pagination';


import style from './dictionary.module.scss'
import SortPanel from 'src/widgets/sort-panel/sort-panel';


interface DictionaryProps {
  dictionaryWords: IDictionary[];
}

export const DictionaryView: FC<DictionaryProps> = ({dictionaryWords}) =>{

  const [isSortByAlphabet, setIsSortByAlphabet] = useState(false);
  const [isSortBoAlphabet, setIsSortBoAlphabet] = useState(false);
  const [isSortByDate, setIsSortByDate] = useState(true);

  const [searchValue, setSearchValue] = useState('');
  const [filteredDictionaryWords, setFilteredDictionaryWords] = useState(dictionaryWords);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 8;

  const lastWordIndex = currentPage * perPage;
  const firstWordIndex = lastWordIndex - perPage;
  const currentWordIndex = 
    lastWordIndex > filteredDictionaryWords.length 
      ? lastWordIndex - perPage + filteredDictionaryWords.length % perPage
      : lastWordIndex

  const displayedDictionaryWords = filteredDictionaryWords.slice(firstWordIndex, lastWordIndex);

  // Sort
  const handleSort = (sortType: 'asc' | 'desc' | 'date') => {
    let sortedWords = [...filteredDictionaryWords];
  
    switch (sortType) {
      case 'asc':
        sortedWords.sort((a, b) => a.originalText.localeCompare(b.originalText));
        setIsSortByAlphabet(true);
        setIsSortBoAlphabet(false);
        setIsSortByDate(false);
        break;
      case 'desc':
        sortedWords.sort((a, b) => b.originalText.localeCompare(a.originalText));
        setIsSortByAlphabet(false);
        setIsSortBoAlphabet(true);
        setIsSortByDate(false);
        break;
      case 'date':
        sortedWords = dictionaryWords;
        setIsSortByAlphabet(false);
        setIsSortBoAlphabet(false);
        setIsSortByDate(true);
        break;
    }
  
    setFilteredDictionaryWords(sortedWords);
  }

  // Search
  const handleFindDictionaryWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchValue = e.target.value.toLowerCase();
    const searchedDictionaryWords = dictionaryWords.filter((word) => 
      word.originalText.toLowerCase().startsWith(newSearchValue));
  
    setFilteredDictionaryWords(newSearchValue ? searchedDictionaryWords : dictionaryWords);
    setSearchValue(newSearchValue);
    setCurrentPage(1);
  }

  const clearSearchInput = () => {
    setFilteredDictionaryWords(dictionaryWords);
    setCurrentPage(1);
    setSearchValue('');
  }

  useEffect(() => {
    setFilteredDictionaryWords(dictionaryWords);
  }, [dictionaryWords])

  useEffect(() => {
    if (searchValue === '') {
      handleSort('date');
    }
  }, [searchValue]);
  
  return (
    <div className={style.wrapper}>
      <div className="flex gap-4 mt-8 mb-4">
        <Search 
          value={searchValue} 
          onChangeValue={handleFindDictionaryWord} 
          clearInput={clearSearchInput}
        />
        <AddDictionaryWordButton />
      </div>

      <div>
        {
          filteredDictionaryWords?.length > 0
          ? 
            <>
              <ul className={style.list}>
                <div className="flex justify-between items-center mb-6">
                  <h3 className={style.title}>
                    Показано слов: {currentWordIndex} из {filteredDictionaryWords.length}
                  </h3>
                  <SortPanel 
                    handleSort={handleSort} 
                    searchValue={searchValue}
                    isSortByAlphabet={isSortByAlphabet}
                    isSortBoAlphabet={isSortBoAlphabet}
                    isSortByDate={isSortByDate}
                  />
                </div>
                {
                  displayedDictionaryWords?.map(el =>
                    <DictionaryItem 
                      id={el.id}
                      key={el.id} 
                      originalText={el.originalText}
                      transcription={el.transcription}
                      translatedText={el.translatedText}
                    />
                  )
                }
              </ul>
              <Pagination 
                totalCount={filteredDictionaryWords.length}
                perPage={perPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </>
          : <p className={style.empty}>Пока здесь пусто...</p>
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
