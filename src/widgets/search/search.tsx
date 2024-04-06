import style from './search.module.scss'

interface Props {
  value: string;
  onChangeValue: (data: any) => void;
  clearInput: () => void;
}

const Search = ({ value, onChangeValue, clearInput }: Props) => {
  return (
    <div className="flex w-full relative">
      <input 
        value={value}
        className={style.input}
        onChange={onChangeValue}
        type="text" 
        placeholder="Введите слово"
      />
      <p onClick={clearInput} className={style.clearInput}>&times;</p>
  </div>
  )
}

export default Search