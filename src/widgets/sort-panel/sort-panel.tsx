import React from 'react'
import style from './sort-panel.module.scss'

interface Props {
  handleSort: (sortType: 'asc' | 'desc' | 'date') => void;
  searchValue: string;
  isSortByAlphabet: boolean;
  isSortBoAlphabet: boolean;
  isSortByDate: boolean;
}

const SortPanel = ({ 
  handleSort, 
  searchValue, 
  isSortByAlphabet,
  isSortBoAlphabet,
  isSortByDate,
}: Props) => (
    <div className="flex items-center gap-4">
      <button 
        className={style.button} 
        onClick={() => handleSort('asc')} 
        disabled={isSortByAlphabet}
      >
        По алфавиту ↑
      </button>
      <button 
        className={style.button} 
        onClick={() => handleSort('desc')} 
        disabled={isSortBoAlphabet}
      >
        По алфавиту ↓
      </button>
      {
        searchValue === '' &&
          <button 
            className={style.button} 
            onClick={() => handleSort('date')} 
            disabled={isSortByDate}
          >
            По дате ↑
          </button>
      }
    </div>
  )

export default SortPanel