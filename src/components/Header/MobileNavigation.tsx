import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import BurgerIcon from './BurgerIcon';
import {
  NavigationMenu,
  NavigationMenuList,
} from '@radix-ui/react-navigation-menu';
import { NAV_ITEMS } from './constants';
import NavLink from './NavLink';

type Props = {};

const MobileNavigation = (props: Props) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant='outline'
          size='icon'
          className='bg-transparent outline-none border-none hover:bg-transparent'
        >
          <BurgerIcon className='text-white hover:text-gray-300' />
        </Button>
      </SheetTrigger>
      <SheetContent
        className='bg-slate-700 border-slate-700'
        side='right'
      >
        <div className='text-white py-20'>
          <NavigationMenu>
            <NavigationMenuList className='flex flex-col text-2xl'>
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.id}
                  item={item}
                  className='capitalize py-4 hover:bg-slate-500 cursor-pointer rounded-xl'
                />
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
