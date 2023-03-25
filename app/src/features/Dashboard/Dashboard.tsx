import React, { PropsWithChildren } from 'react';
import AppBar from '../../components/AppBar/AppBar';
import MenuItems from '../../components/MenuItems/MenuItems';
import AppWrapper from '../../components/AppWrapper/AppWrapper';
import AppBody from '../../components/AppBody/AppBody';

const Dashboard = (props: PropsWithChildren): JSX.Element => {
  return (
    <AppWrapper>
      <AppBar>
        <MenuItems
          items={[
            { to: '/', label: 'PixelGrid' },
            { to: '/admin', label: 'Admin' },
            { to: '/profile', label: 'Profile' },
          ]}
        />
      </AppBar>
      <AppBody>{props.children}</AppBody>
    </AppWrapper>
  );
};

export default Dashboard;
