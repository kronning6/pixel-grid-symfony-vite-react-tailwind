import React, { PropsWithChildren } from 'react';

const AppBody = (props: PropsWithChildren): JSX.Element => {
  return (
    <div className="flex h-full w-full flex-col pt-[52px]">
      {props.children}
    </div>
  );
};

export default AppBody;
