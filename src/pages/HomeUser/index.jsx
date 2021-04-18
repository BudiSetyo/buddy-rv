import React, { useState } from 'react';
import DashboardLayout from '@/layouts/Dashboard/index';
import calenderIcon from '@/assets/images/dashboard/calender-icon.png';
import { Link, link } from 'react-router-dom'

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
              <h3>Today, October 16</h3>
              <img src={calenderIcon} alt="calender-icon" />
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
              <div className="text--center">
                <p>
                  <Link>
                    <span className="text--blue">
                      All schedule
                    </span>
                  </Link>
                  {' '}
                  <Link>
                    <span className="text--grey">
                      For you
                    </span>
                  </Link>
                </p>
              </div>
            </section>
          </section>
        </section>
        <section className="width--80 ml-5 mb-3 background--blue component--desktop-visible" />
      </section>
    </DashboardLayout>
  );
}

export default index;
