import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import HomeIcon from './icons/home.svg';
import VehicleIcon from './icons/truck.svg';
import LocationIcon from './icons/location.svg';
import DriverIcon from './icons/steering-wheel.svg';
import MessageIcon from './icons/message.svg';
import DashboardIcon from './icons/tachometer.svg';

import './_sidebar.scss';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link className='sidebar__title heading-secondary' to='/'>
        VMS
      </Link>
      <nav className='sidebar__navigation'>
        <div className='sidebar__nav-item sidebar__nav-item--home'>
          <img src={HomeIcon} alt='Home Icon' className='sidebar__icon' />
          <NavLink activeClassName='current-link' exact to='/'>
            Home
          </NavLink>
        </div>
        <div className='sidebar__nav-item sidebar__nav-item--vehicles'>
          <img src={VehicleIcon} alt='Vehicle Icon' className='sidebar__icon' />
          <NavLink activeClassName='current-link' to='/vehicles'>
            Vehicles
          </NavLink>
        </div>
        <div className='sidebar__nav-item sidebar__nav-item--locations'>
          <img
            src={LocationIcon}
            alt='Location Icon'
            className='sidebar__icon'
          />
          <NavLink activeClassName='current-link' to='/locations'>
            Location
          </NavLink>
        </div>
        <div className='sidebar__nav-item sidebar__nav-item--drivers'>
          <img src={DriverIcon} alt='Driver Icon' className='sidebar__icon' />
          <NavLink activeClassName='current-link' to='/drivers'>
            Drivers
          </NavLink>
        </div>
        <div className='sidebar__nav-item sidebar__nav-item--messages'>
          <img src={MessageIcon} alt='Message Icon' className='sidebar__icon' />
          <NavLink activeClassName='current-link' to='/messages'>
            Messages
          </NavLink>
        </div>
        <div className='sidebar__nav-item sidebar__nav-item--dashboard'>
          <img
            src={DashboardIcon}
            alt='Dashboard Icon'
            className='sidebar__icon'
          />
          <NavLink activeClassName='current-link' to='/dashboard'>
            Dashboard
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
