import { RouteObject } from 'react-router-dom';

import { VerbForms } from './../verb-forms/verb-forms';

export const VerbFormsRoute = (path: string): RouteObject => ({
  path,
  loader: () => {
    return null;
  },
  element: <VerbForms />,
});
