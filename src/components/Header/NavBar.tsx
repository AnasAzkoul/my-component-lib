'use client';
import React from 'react';
import { NAV_ITEMS } from './constants';
import NavLink from './NavLink';
import {
  NavigationMenu,
  NavigationMenuList,
} from '@radix-ui/react-navigation-menu';
import { useMediaQuery } from '@mantine/hooks';
import classNames from 'classnames';

const NavBar = () => {
  const matches = useMediaQuery('(min-width: 768px)');

  return (
    <NavigationMenu
      orientation={matches ? 'horizontal' : 'vertical'}
      className={classNames(`${!matches ? 'hidden' : ''}`)}
    >
      <NavigationMenuList className={classNames('flex items-center gap-6')}>
        {NAV_ITEMS.map((item) => (
          <NavLink
            item={item}
            key={item.id}
            className='text-white capitalize cursor-pointer'
          />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavBar;
