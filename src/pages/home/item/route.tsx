import { RouteObject } from 'react-router-dom';

import { getVerbFormById } from 'src/entities/theory/module';
import DrillPage from './DrillPage';
import { getDrillById } from '../model';

export const DrillRoute = (path: string): RouteObject => ({
  path,
  loader: ({params}) => {
    getDrillById(params)
    console.log(params)
    return null;
  },
  element: <DrillPage />,
});
