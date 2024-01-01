import { RouteObject } from 'react-router-dom';

import { routeHomeOpen } from './model';
import { Home } from './home';


export const HomeRoute = (path: string): RouteObject => ({
  path,
  loader: () => {
    routeHomeOpen();
    return null;
  },
  element: <Home />,
});
