import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  Link,
  Outlet,
  RootRoute,
  Route,
  Router,
  RouterProvider,
} from '@tanstack/react-router';

const rootRoute = new RootRoute({
  component: () => {
    return (
      <>
        <div className="flex h-full w-full flex-col bg-blue-900">
          <div className="container mx-auto mt-5 w-96 text-lg text-amber-50">
            <Link
              to="/"
              activeProps={{
                className: 'font-bold underline',
              }}
              activeOptions={{ exact: true }}
            >
              Home
            </Link>
            {' | '}
            <Link
              to="/admin"
              activeProps={{
                className: 'font-bold underline',
              }}
              activeOptions={{ exact: true }}
            >
              Admin
            </Link>
            {' | '}
            <Link
              to="/profile"
              activeProps={{
                className: 'font-bold underline',
              }}
              activeOptions={{ exact: true }}
            >
              Profile
            </Link>
          </div>
          <div className="mt-4 text-center text-amber-100">
            <Outlet />
          </div>
        </div>
      </>
    );
  },
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => {
    return 'Home';
  },
});

const adminRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'admin',
  component: () => {
    return 'Admin';
  },
  errorComponent: () => 'Error!',
});

const profileRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'profile',
  component: () => {
    return 'Profile';
  },
  errorComponent: () => 'Error!',
});

const routeTree = rootRoute.addChildren([indexRoute, adminRoute, profileRoute]);

// Set up a Router instance
const router = new Router({
  routeTree,
  defaultPreload: 'intent',
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
