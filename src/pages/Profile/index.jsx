import React from 'react';
import Dashboardlayout from '@/layouts/Dashboard/index';
import ProfileImg from '@/assets/images/profile/profile-icon.png';
import EditIcon from '@/assets/images/profile/edit-icon.png';
import PhoneIcon from '@/assets/images/profile/phone-icon.png';
import PinIcon from '@/assets/images/profile/pin-icon.png';
import ChatIcon from '@/assets/images/profile/chat-icon.png';
import NotifIcon from '@/assets/images/profile/notif-icon.png';
import LockIcon from '@/assets/images/profile/security-icon.png';
import StorageIcon from '@/assets/images/profile/storage-icon.png';
import InsideIcon from '@/assets/images/profile/inside-icon.png';
import './style.scss';

const index = () => (
  <Dashboardlayout>
    <section className="profile-container height--100 background--white">
      <header className="profile-header height--30">
        <div className="wrapper width--100 height--100 flex flex--column flex--justify-center flex--align-center text--center text--white">
          <div className="text--center">
            <img className="profile-img" src={ProfileImg} alt="profile-img" />
            <button type="button">
              <img className="edit-icon" src={EditIcon} alt="edit-icon" />
            </button>
          </div>
          <h3>Emir Kharisma</h3>
        </div>
      </header>
      <section className="profile-content width--100">
        <div className="title-profile pt-4 pl-5 mb-5">
          <h3>Profile Setting</h3>
        </div>
        <div className="width--90 pl-5">
          <button className="menu-profile width--100 flex flex--align-center flex--justify-space-between pb-3 mb-2" type="button">
            <div className="flex flex--align-center">
              <img className="menu-img mr-2" src={PhoneIcon} alt="phone-icon" style={{ margin: 0 }} />
              <h4 className="" style={{ margin: 0 }}>Phone Numbers</h4>
            </div>
            <img className="in-img" src={InsideIcon} alt="inside-icon" style={{ margin: 0 }} />
          </button>
          <button className="menu-profile width--100 flex flex--align-center flex--justify-space-between pb-3 mb-2" type="button">
            <div className="flex flex--align-center">
              <img className="menu-img mr-2" src={PinIcon} alt="phone-icon" style={{ margin: 0 }} />
              <h4 className="" style={{ margin: 0 }}>Change Password</h4>
            </div>
            <img className="in-img" src={InsideIcon} alt="inside-icon" style={{ margin: 0 }} />
          </button>
          <button className="menu-profile width--100 flex flex--align-center flex--justify-space-between pb-3 mb-2" type="button">
            <div className="flex flex--align-center">
              <img className="menu-img mr-2" src={ChatIcon} alt="phone-icon" style={{ margin: 0 }} />
              <h4 className="" style={{ margin: 0 }}>Chat Settings</h4>
            </div>
            <img className="in-img" src={InsideIcon} alt="inside-icon" style={{ margin: 0 }} />
          </button>
          <button className="menu-profile width--100 flex flex--align-center flex--justify-space-between pb-3 mb-2" type="button">
            <div className="flex flex--align-center">
              <img className="menu-img mr-2" src={NotifIcon} alt="phone-icon" style={{ margin: 0 }} />
              <h4 className="" style={{ margin: 0 }}>Push Notifications</h4>
            </div>
            <img className="in-img" src={InsideIcon} alt="inside-icon" style={{ margin: 0 }} />
          </button>
          <button className="menu-profile width--100 flex flex--align-center flex--justify-space-between pb-3 mb-2" type="button">
            <div className="flex flex--align-center">
              <img className="menu-img mr-2" src={LockIcon} alt="phone-icon" style={{ margin: 0 }} />
              <h4 className="" style={{ margin: 0 }}>Privacy and Security</h4>
            </div>
            <img className="in-img" src={InsideIcon} alt="inside-icon" style={{ margin: 0 }} />
          </button>
          <button className="menu-profile width--100 flex flex--align-center flex--justify-space-between pb-3 mb-2" type="button">
            <div className="flex flex--align-center">
              <img className="menu-img mr-2" src={StorageIcon} alt="phone-icon" style={{ margin: 0 }} />
              <h4 className="" style={{ margin: 0 }}>Data and Storage</h4>
            </div>
            <img className="in-img" src={InsideIcon} alt="inside-icon" style={{ margin: 0 }} />
          </button>
        </div>
      </section>
    </section>
  </Dashboardlayout>
);

export default index;
