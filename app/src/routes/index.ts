import { Router } from '@tanstack/react-router';

import rootRoute from './rootRoute';
import indexRoute from './indexRoute';
import adminRoute from './adminRoute';
import profileRoute from './profileRoute';

const routeTree = rootRoute.addChildren([indexRoute, adminRoute, profileRoute]);

export const router = new Router({
  routeTree,
  defaultPreload: 'intent',
});
