import React from 'react';
import WIPIcon from './WIP.svg';
import './_wip.scss';

const WIP = () => {
  return (
    <div className='wip'>
      <img className='wip__icon' src={WIPIcon} alt='WIP Icon' />
      <p className='wip__text'>Work In Progress</p>
    </div>
  );
};

export default WIP;
