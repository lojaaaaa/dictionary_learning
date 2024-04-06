import style from './Pagination.module.scss'
import { FC } from 'react';

interface PaginationProps {
  totalCount: number;
  perPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: FC <PaginationProps> = ({
  totalCount, 
  perPage, 
  currentPage, 
setCurrentPage}) => {

  const totalPages = Math.ceil(totalCount / perPage);

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1)
  }

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  return (
    <div className='flex justify-center items-center gap-6'>
      <button 
        className={style.button} 
        onClick={() => setCurrentPage(1)} 
        disabled={currentPage === 1}
      >
        {'< <'}
      </button>
      <button 
        className={style.button} 
        onClick={handlePrevPage} 
        disabled={currentPage === 1}
      >
        {'<'}
      </button>

      <p className={style.currentPage}>{currentPage}</p>

      <button 
        className={style.button} 
        onClick={handleNextPage} 
        disabled={currentPage === totalPages}
      >
        {'>'}
      </button>
      <button 
        className={style.button} 
        onClick={() => setCurrentPage(totalPages)} 
        disabled={currentPage === totalPages}
      >
        {'> >'}
      </button>
    </div>
  )
}

export default Pagination