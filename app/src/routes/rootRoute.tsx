import React from 'react';
import { Outlet, RootRoute } from '@tanstack/react-router';
import Dashboard from '../features/Dashboard/Dashboard';

const rootRoute = new RootRoute({
  component: () => {
    return (
      <Dashboard>
        <Outlet />
      </Dashboard>
    );
  },
});

export default rootRoute;
