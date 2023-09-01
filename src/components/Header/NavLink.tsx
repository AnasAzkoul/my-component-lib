import React, { ComponentProps } from 'react';
import {
  NavigationMenuItem,
} from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import classNames from 'classnames';

interface Props extends ComponentProps<typeof NavigationMenuItem> {
  item: {
    id: number;
    title: string;
    link: string;
  };
}

const NavLink = ({ item, className }: Props) => {
  return (
    <NavigationMenuItem className={classNames(`${className}`)} asChild>
      <Link href={item.link} className='pl-2'>{item.title}</Link>
    </NavigationMenuItem>
  );
};

export default NavLink;
