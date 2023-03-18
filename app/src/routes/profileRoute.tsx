import { Route } from '@tanstack/react-router';
import rootRoute from './rootRoute';
import Profile from '../features/Profile/Profile';

const profileRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'profile',
  component: Profile,
  errorComponent: () => 'Error!',
});

export default profileRoute;
