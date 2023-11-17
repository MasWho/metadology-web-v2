import React from 'react';
import styles from './chevron-arrow.module.scss';

type Props = {
  direction: 'right' | 'left';
  size: string;
  inactive?: boolean;
  onClick?: () => void;
};

const ChevronArrow = (props: Props) => {
  const { direction, size, inactive, onClick } = props;
  const arrowClass = [styles.arrowbtn];
  if (direction === 'right') {
    arrowClass.push(styles.arrowbtnRight);
  } else {
    arrowClass.push(styles.arrowbtnLeft);
  }

  if(inactive) {
    arrowClass.push(styles.inactive);
  }

  return (
    <button disabled={inactive} className='relative' style={{width: size, height: size}} onClick={onClick} >
      <div className={arrowClass.join(' ')}></div>
    </button>
  );
};

export default ChevronArrow;
