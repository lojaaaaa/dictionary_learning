import { RouteObject } from 'react-router-dom';

import { TheoryHome } from './theory-home';

export const TheoryHomeRoute = (path: string): RouteObject => ({
  path,
  loader: () => {
    return null;
  },
  element: <TheoryHome />,
});
