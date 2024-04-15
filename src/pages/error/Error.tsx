import { useRouteError } from 'react-router-dom';
import style from './Error.module.scss'

export const ErrorPage = () => {

  const error: any = useRouteError();
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Oops!</h1>
      <p className={style.text}>Sorry, an unexpected error has occurred.</p>
      <p className={style.text}>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
