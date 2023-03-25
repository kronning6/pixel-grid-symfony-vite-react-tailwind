import React, { PropsWithChildren } from 'react';
import AppBar from '../../components/AppBar/AppBar';
import MenuItems from '../../components/MenuItems/MenuItems';
import AppWrapper from '../../components/AppWrapper/AppWrapper';
import AppBody from '../../components/AppBody/AppBody';

const DashboardBody = (props: PropsWithChildren): JSX.Element => {
  return (
    <div className="flex h-full flex-col">
      <div className="h-full overflow-hidden">{props.children}</div>
      <div className="p-5 text-center font-extralight text-white">
        A Kyle Ronning Production
      </div>
    </div>
  );
};

const Dashboard = (props: PropsWithChildren): JSX.Element => {
  return (
    <AppWrapper>
      <AppBar>
        <MenuItems
          items={[
            { to: '/', label: 'PixelGrid' },
            { to: '/profile', label: 'Profile' },
            { to: '/admin', label: 'Admin' },
          ]}
        />
      </AppBar>
      <AppBody>
        <DashboardBody>{props.children}</DashboardBody>
      </AppBody>
    </AppWrapper>
  );
};

export default Dashboard;
