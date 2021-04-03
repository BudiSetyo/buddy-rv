import React from 'react';
import Notif from '@/assets/images/sidebar/notif-icon.svg';
import Profile from '@/assets/images/sidebar/profile-icon.svg';
import DashboardIcon from '@/assets/images/sidebar/dashboard-icon.svg';
import ActivityIcon from '@/assets/images/sidebar/activity-icon.svg';
import SettingIcon from '@/assets/images/sidebar/setting-icon.svg';
import HelpIcon from '@/assets/images/sidebar/help-icon.svg';
import LogoutIcon from '@/assets/images/sidebar/logout-icon.svg';
import './style.scss';

import { Link } from 'react-router-dom';

const index = () => (
  <aside className="sidebar background--blue width--100 height--95">
    <button type="button" className="nav-link width--100 mb-1">
      <div className="notif text--right pt-3">
        <Link to="/notification">
          <img className="nottif-img" src={Notif} alt="notif-icon" />
        </Link>
      </div>
      <div className="profile text--white text--left">
        <Link to="/profile">
          <img className="profile-img" src={Profile} alt="profile-icon" />
        </Link>
      </div>
      <h4 className="text--left">Emir Kharisma</h4>
      <p className="text--left">online</p>
    </button>
    <button type="button" className="nav-link nav-link--active width--100 flex flex--align-center mb-2">
      <img className="icon mr-3" src={DashboardIcon} alt="dashboard-icon" style={{ margin: '0' }} />
      Dashboard
    </button>
    <button type="button" className="nav-link width--100 flex flex--align-center mb-1">
      <img className="icon mr-3" src={ActivityIcon} alt="dashboard-icon" style={{ margin: '0' }} />
      Activity
    </button>
    <button type="button" className="nav-link width--100 flex flex--align-center mb-1">
      <img className="icon mr-3" src={SettingIcon} alt="dashboard-icon" style={{ margin: '0' }} />
      Setting
    </button>
    <button type="button" className="nav-link width--100 flex flex--align-center mb-1">
      <img className="icon mr-3" src={HelpIcon} alt="dashboard-icon" style={{ margin: '0' }} />
      Help
    </button>
    <button type="button" className="nav-link width--100 flex flex--align-center mb-1 text--red">
      <img className="icon mr-3" src={LogoutIcon} alt="dashboard-icon" style={{ margin: '0' }} />
      Logout
    </button>
  </aside>
);

export default index;
