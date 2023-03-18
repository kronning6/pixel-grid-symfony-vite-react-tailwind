import { Route } from '@tanstack/react-router';
import rootRoute from './rootRoute';
import PixelGrid from '../features/PixelGrid/PixelGrid';

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: PixelGrid,
});

export default indexRoute;
