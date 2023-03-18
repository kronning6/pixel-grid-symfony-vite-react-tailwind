import { Route } from '@tanstack/react-router';
import rootRoute from './rootRoute';
import Admin from '../features/Admin/Admin';

const adminRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'admin',
  component: Admin,
  errorComponent: () => 'Error!',
});

export default adminRoute;
