import React, { PropsWithChildren } from 'react';

const AppBar = (props: PropsWithChildren): JSX.Element => {
  return (
    <div className="w-full bg-green-700 p-3 text-lg">
      <div className="container mx-auto">{props.children}</div>
    </div>
  );
};

export default AppBar;
