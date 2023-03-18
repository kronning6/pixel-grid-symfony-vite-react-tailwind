import React, { PropsWithChildren } from 'react';
import { Link } from '@tanstack/react-router';

interface MenuItemsProps {
  items: { to: string; label: string }[];
}

const MenuItems = (props: PropsWithChildren<MenuItemsProps>): JSX.Element => {
  return (
    <>
      {props.items.map(i => (
        <Link
          key={i.to}
          className="pr-5"
          to={i.to}
          activeProps={{
            className: 'font-bold underline',
          }}
          activeOptions={{ exact: true }}
        >
          {i.label}
        </Link>
      ))}
    </>
  );
};

export default MenuItems;
