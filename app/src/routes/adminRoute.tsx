import { Route } from '@tanstack/react-router';
import rootRoute from './rootRoute';

const adminRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'admin',
  component: () => {
    return 'Admin';
  },
  errorComponent: () => 'Error!',
});

export default adminRoute;
