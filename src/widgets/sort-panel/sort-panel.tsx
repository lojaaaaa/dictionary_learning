import React from 'react'
import style from './sort-panel.module.scss'
import { Button } from 'src/shared/ui';

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
      <Button
        style={{ fontSize: '16px' }}
        onClick={() => handleSort('asc')} 
        disabled={isSortByAlphabet}
      >
        По алфавиту ↑
      </Button>
      <Button 
        style={{ fontSize: '16px' }}
        onClick={() => handleSort('desc')} 
        disabled={isSortBoAlphabet}
      >
        По алфавиту ↓
      </Button>
      {
        searchValue === '' &&
          <Button
            style={{ fontSize: '16px' }} 
            onClick={() => handleSort('date')} 
            disabled={isSortByDate}
          >
            По дате ↑
          </Button>
      }
    </div>
  )

export default SortPanel