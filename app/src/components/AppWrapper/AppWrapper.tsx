import React, { PropsWithChildren } from 'react';

interface AppWrapperProps {
  customColor?: string | null | undefined;
  customBackground?: string | null | undefined;
}

const AppWrapper = (props: PropsWithChildren<AppWrapperProps>): JSX.Element => {
  const customStyles: { [s: string]: string } = {};
  if (props.customColor) {
    customStyles['color'] = props.customColor;
  }
  if (props.customBackground) {
    customStyles['background'] = props.customBackground;
  }
  return (
    <div
      className="h-full w-full bg-[#0e0e0e] text-lime-400"
      style={customStyles}
    >
      {props.children}
    </div>
  );
};

export default AppWrapper;
