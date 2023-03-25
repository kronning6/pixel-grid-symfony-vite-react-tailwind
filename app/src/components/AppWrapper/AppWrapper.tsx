import React, { PropsWithChildren } from 'react';

const AppWrapper = (props: PropsWithChildren): JSX.Element => {
  return <div className="h-full w-full bg-[#464646]">{props.children}</div>;
};

export default AppWrapper;
