import { Route } from '@tanstack/react-router';
import rootRoute from './rootRoute';

const profileRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'profile',
  component: () => {
    return 'Profile';
  },
  errorComponent: () => 'Error!',
});

export default profileRoute;
