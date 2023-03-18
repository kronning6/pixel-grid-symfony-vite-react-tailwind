import React, { PropsWithChildren } from 'react';

const AppWrapper = (props: PropsWithChildren): JSX.Element => {
  return (
    <div className="flex h-full w-full flex-col bg-green-500">
      {props.children}
    </div>
  );
};

export default AppWrapper;
