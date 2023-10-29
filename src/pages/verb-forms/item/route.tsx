import { RouteObject } from 'react-router-dom';

import { VerbForm } from './verb-form';

export const VerbFormRoute = (path: string): RouteObject => ({
  path,
  loader: () => {
    return null;
  },
  element: <VerbForm />,
});
