import { RouteObject } from 'react-router-dom';

import { routeTheoryOpen } from './model';
import { Theory } from './theory';

export const TheoryRoute = (path: string): RouteObject => ({
  path,
  loader: () => {
    routeTheoryOpen();
    return null;
  },
  element: <Theory />,
});
