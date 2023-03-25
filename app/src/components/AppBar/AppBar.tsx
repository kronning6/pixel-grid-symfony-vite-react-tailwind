import React, { PropsWithChildren } from 'react';

const AppBar = (props: PropsWithChildren): JSX.Element => {
  return (
    <div className="absolute top-0 left-0 right-0 h-[52px] w-full bg-[#195cab] p-3 text-lg text-white">
      <div className="container mx-auto">{props.children}</div>
    </div>
  );
};

export default AppBar;
