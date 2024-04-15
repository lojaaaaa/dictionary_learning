import style from './/ErrorLabel.module.scss'
interface Props {
  children: React.ReactNode;
}

export const ErrorLabel = ({ children }: Props) => {
  return (
    <div className={style.error}>
      * {children}
    </div>
  )
}