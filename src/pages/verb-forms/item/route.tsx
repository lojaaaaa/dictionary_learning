import { RouteObject } from 'react-router-dom';

import { VerbForm } from './verb-form';
import { getVerbFormById } from 'src/entities/theory/module';

export const VerbFormRoute = (path: string): RouteObject => ({
  path,
  loader: ({ params }) => {
    getVerbFormById(params)
    return null;
  },
  element: <VerbForm />,
});
