import { RouteObject } from 'react-router-dom';

import { routeDictionaryOpen } from './model';
import { Dictionary } from './dictionary';

export const DictionaryRoute = (path: string): RouteObject => ({
  path,
  loader: () => {
    routeDictionaryOpen();
    return null;
  },
  element: <Dictionary />,
});
