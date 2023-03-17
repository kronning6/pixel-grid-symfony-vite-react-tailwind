import { Link, Outlet, RootRoute } from '@tanstack/react-router';

const rootRoute = new RootRoute({
  component: () => {
    return (
      <>
        <div className="flex h-full w-full flex-col bg-gray-300">
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

export default rootRoute;
