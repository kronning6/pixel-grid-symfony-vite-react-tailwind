import React, { PropsWithChildren } from 'react';

interface AppBarProps {
  customColor?: string | null | undefined;
  customBackground?: string | null | undefined;
}

const AppBar = (props: PropsWithChildren<AppBarProps>): JSX.Element => {
  const customStyles: { [s: string]: string } = {};
  if (props.customColor) {
    customStyles['color'] = props.customColor;
  }
  if (props.customBackground) {
    customStyles['background'] = props.customBackground;
  }
  return (
    <div
      className="green-500 absolute top-0 left-0 right-0 h-[52px] w-full bg-[#0e0e0e] p-3 text-lg"
      style={customStyles}
    >
      <div className="container mx-auto">{props.children}</div>
    </div>
  );
};

export default AppBar;
