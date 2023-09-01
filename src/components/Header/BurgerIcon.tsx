import React, {ComponentProps} from 'react';
import classNames from 'classnames';

interface IconProps extends ComponentProps<'svg'> {

}

const BurgerIcon = ({className}: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='currentColor'
      className={classNames('w-6 h-6',`${className}`)}
    >
      <path
        fillRule='evenodd'
        d='M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z'
        clipRule='evenodd'
      />
    </svg>
  );
}

export default BurgerIcon
