'use client';
import NavLogo from './NavLogo';
import NavBar from './NavBar';
import MobileNavigation from './MobileNavigation';
import { useMediaQuery } from '@mantine/hooks';


type Props = {};

const MainHeader = (props: Props) => {
  const matches = useMediaQuery('(min-width: 768px)');
  return (
    <header className='py-4 bg-slate-700'>
      <div className='flex items-center justify-between container relative'>
        <NavLogo />
        {!matches ? <MobileNavigation /> : <NavBar />}
      </div>
    </header>
  );
};

export default MainHeader;
