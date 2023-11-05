import style from './/ErrorLabel.module.scss'

export const ErrorLabel = ({children}) => {
  return (
    <div className={style.error}>
      * {children}
    </div>
  )
}