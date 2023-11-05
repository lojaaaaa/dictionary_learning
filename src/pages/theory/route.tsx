import { Outlet, RouteObject } from 'react-router-dom';

import { routeTheoryOpen } from './model';
import { ErrorPage } from '../error/Error';
import { VerbFormsRoute } from '../verb-forms/route';
import { VerbRoute } from '../verb/route';
import { TheoryHomeRoute } from '../theory-home/route';

import style from './theory.module.scss'
import { VerbFormRoute } from '../verb-forms/item/route';


const TheoryLayout = () => (
  <div className={style.wrapper}>
    <Outlet/>
  </div>
);

export const TheoryRoute = (path: string): RouteObject => ({
  path,
  loader: () => {
    routeTheoryOpen();
    return null;
  },
  element: <TheoryLayout />,
  errorElement: <ErrorPage />,
  children: [
    TheoryHomeRoute(path),
    VerbFormsRoute(`${path}/verb-forms`),
    VerbFormRoute(`${path}/verb-forms/:forms_id/:id`),
    VerbRoute(`${path}/verb`)
  ],
});
