import React, { useState } from 'react';
import DashboardLayout from '@/layouts/Dashboard/index';
import calenderIcon from '@/assets/images/dashboard/calender-icon.png';
import { Link } from 'react-router-dom'

import plusIcon from '@/assets/images/message/plus-icon.png';
import searchIcon from '@/assets/images/message/search-icon.png';
import userIcon from '@/assets/images/message/profile-icon-1.png'

import './style.scss'

const index = () => {
  const [cal] = useState([
    {
      date: 'Mo',
      dateNumber: 12,
    },
    {
      date: 'Tu',
      dateNumber: 13,
    },
    {
      date: 'We',
      dateNumber: 14,
    },
    {
      date: 'Th',
      dateNumber: 15,
    },
    {
      date: 'Fr',
      dateNumber: 16,
    },
    {
      date: 'Sa',
      dateNumber: 17,
    },
    {
      date: 'Su',
      dateNumber: 18,
    },
  ])

  const [schedule] = useState([
    {
      time: '08:00',
      className: 'Introduction to Banking Finance',
      duration: '100 minutes',
    },
    {
      time: '08:00',
      className: 'Trigonometry',
      duration: '50 minutes',
    },
    {
      time: '11:00',
      className: 'History of Europe',
      duration: '100 minutes',
    },
  ])

  const textTruncate = (str, length, ending) => {
    if (!length) {
      // eslint-disable-next-line no-param-reassign
      length = 100;
    }
    if (!ending) {
      // eslint-disable-next-line no-param-reassign
      ending = '...';
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    }
    return str;
  };

  return (
    <DashboardLayout>
      <section className="width--100 flex">
        <section className="width--100 mb-3">
          <header className="news-header background--white mb-5">
            <h3 className="news-title ml-4 mb-3 pt-4">News</h3>
            <div className="news-content background--blue">
              <div className="news-wrapper">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <p className="news-text ml-4 text--white">New update for front end development class sylabus!</p>
                <br />
                <div className="nav-news flex flex--justify-center">
                  <button className="nav-btn nav-btn-active m-1"></button>
                  <button className="nav-btn m-1"></button>
                  <button className="nav-btn m-1"></button>
                  <button className="nav-btn m-1"></button>
                  <button className="nav-btn m-1"></button>
                </div>
                <br />
              </div>
            </div>
          </header>
          <section className="schedule background--white p-4">
            <div className="today pl-3 flex flex--justify-space-between">
              <h3>My Class</h3>
              <img src={calenderIcon} alt="calender-icon" />
            </div>
            <div className="text--center">
              <h4>October 2020</h4>
            </div>
            <div className="calender flex flex--justify-space-between mb-3">
              {cal.map((item, index) => {
                return (
                  <div key={index}>
                    <p className="text--grey">{item.date}</p>
                    <p>{item.dateNumber}</p>
                  </div>
                )
              })}
            </div>
            <section>
              <div className="schedule-fasilitator p-4 flex flex--justify-space-between background--white">
                <p className="mb-0">08.00 - 09.40</p>
                <p className="mb-0">Front-end fundamentals</p>
                <p className="mb-0">24</p>
              </div>
              <div className="newtask flex flex--justify-center mt-5 mb-5">
                <button className="newtask-btn p-3 pl-4 pr-4 flex flex--align-center background--blue text--white">
                  <img className="newtask-img mb-0 mr-3" src={plusIcon} alt="plus-icon" />
                  New Task
                </button>
              </div>
            </section>
          </section>
        </section>
        <section className="message width--80 ml-5 mb-3 background--white component--desktop-visible">
          <div className="message-title pt-4 pl-4 pr-4 mb-2 flex flex--justify-space-between">
            <h3>Messages</h3>
            <img src={plusIcon} alt="plus-icon" />
          </div>
          <div className="message-search flex flex-align-center ml-4 mr-4 p-2 background--light-blue">
            <img className="mb-0 mr-2" src={searchIcon} alt="search-icon" />
            <input className="message-input width--90" type="text" placeholder="search" />
          </div>
          <div className="message-content mt-4 ml-4 mr-4 flex flex--justify-space-between flex-align-center">
            <div className="flex">
              <img className="user-img mb-0 mr-4" src={userIcon} alt="user-icon" />
              <div className="flex flex--column flex--justify-center">
                <h4 className="mb-0">Nissa Sabyan</h4>
                <p className="text--grey mb-0">
                  {
                    textTruncate('How about number 3?', 20)
                  }
                </p>
              </div>
            </div>
            <p className="text--grey mb-0">10.15 pm</p>
          </div>
        </section>
      </section>
    </DashboardLayout>
  );
}

export default index;
