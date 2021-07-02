import React from 'react';
import Notif from '@/assets/images/sidebar/notif-icon.svg';
import Profile from '@/assets/images/sidebar/profile-icon.svg';
import DashboardIcon from '@/assets/images/sidebar/dashboard-icon.svg';
import ActivityIcon from '@/assets/images/sidebar/activity-icon.svg';
import SettingIcon from '@/assets/images/sidebar/setting-icon.svg';
import HelpIcon from '@/assets/images/sidebar/help-icon.svg';
import LogoutIcon from '@/assets/images/sidebar/logout-icon.svg';
import './style.scss';

import { Link, useHistory } from 'react-router-dom';

const index = () => {
  const history = useHistory()

  const handleLogout = () => {
    // localStorage.removeItem('username');
    // localStorage.removeItem('email');
    // localStorage.removeItem('role');
    // localStorage.removeItem('password');
    // localStorage.removeItem('id');
    localStorage.removeItem('token')

    history.push('/login')
  };

  return (
    <aside className="sidebar background--blue width--100 height--95">
      <button type="button" className="nav-link width--100 mb-1">
        <div className="notif text--right pt-3">
          <Link to="/notification">
            <img className="notif-img" src={Notif} alt="notif-icon" />
          </Link>
        </div>
        <div className="profile text--white text--left">
          <Link to="/profile">
            <img className="profile-img mb-3" src={Profile} alt="profile-icon" />
          </Link>
        </div>
        <h4 className="text--left">Emir Kharisma</h4>
        <p className="text--left mb-5">online</p>
      </button>
      <Link to="/home-user">
        <button type="button" className="nav-link width--100 flex flex--align-center mb-1">
          <img className="icon mr-3" src={DashboardIcon} alt="dashboard-icon" style={{ margin: '0' }} />
            Dashboard
          </button>
      </Link>
      <Link to="/activity-user">
        <button type="button" className="nav-link width--100 flex flex--align-center mb-1">
          <img className="icon mr-3" src={ActivityIcon} alt="dashboard-icon" style={{ margin: '0' }} />
            Activity
          </button>
      </Link>
      <button type="button" className="nav-link width--100 flex flex--align-center mb-1">
        <img className="icon mr-3" src={SettingIcon} alt="dashboard-icon" style={{ margin: '0' }} />
          Setting
        </button>
      <button type="button" className="nav-link width--100 flex flex--align-center mb-1">
        <img className="icon mr-3" src={HelpIcon} alt="dashboard-icon" style={{ margin: '0' }} />
          Help
        </button>
      <button onClick={handleLogout} type="button" className="nav-link width--100 flex flex--align-center mb-1 text--red">
        <img className="icon mr-3" src={LogoutIcon} alt="dashboard-icon" style={{ margin: '0' }} />
          Logout
        </button>
    </aside>
  );
}


export default index;
