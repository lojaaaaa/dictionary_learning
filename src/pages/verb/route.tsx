import { RouteObject } from 'react-router-dom';

import { Verb } from './verb';

export const VerbRoute = (path: string): RouteObject => ({
  path,
  loader: () => {
    return null;
  },
  element: <Verb />,
});
