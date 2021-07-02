import React, { useState } from 'react';
import DashboardLayout from '@/layouts/Dashboard/index';
import './style.scss';
import DetailBg from '@/assets/images/activity/detail-bg.svg';

import Detail from './detail/detail';
import Discussion from './discussion/discussion';
import Progress from './progress/progress';

import { IoChevronBack } from 'react-icons/io5';

const index = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const data = {
    title: 'Know More Javascript',
    level: 'beginner',
    category: 'software',
    price: 0,
    score: null,
    description:
      'Javascript from the basic for beginner. JavaScript is a programming language that adds interactivity to your website. This happens in games, in the behavior of responses when buttons are pressed or with data entry on forms; with dynamic styling; with animation, etc. This class helps you get started with JavaScript and furthers your understanding of what is possible.',
  };

  const firstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const tabName = ['Information', 'Class Progress', 'Class Discussion'];

  return (
    <DashboardLayout>
      <section>
        <div className="flex flex--align-center">
          <button className="back-btn">
            <i style={{ fontSize: '30px' }}>
              <IoChevronBack />
            </i>
          </button>
          <h3>{data.title}</h3>
        </div>
        <section className="background--white" style={{ borderRadius: '20px' }}>
          <div
            className="header-bg"
            style={{ backgroundImage: `url(${DetailBg})` }}
          >
            <header className="header-content flex flex--justify-space-between flex--align-end">
              <div
                className="background--blue"
                style={{
                  height: '200px',
                  width: '240px',
                  position: 'relative',
                  top: '80px',
                  borderRadius: '20px',
                }}
              ></div>
              <div className="wrapper flex flex--column flex--justify-end">
                <h2>{data.title}</h2>
                <div className="selection flex">
                  <p className="mr-3">Level : {firstLetter(data.level)}</p>
                  <p className="mr-3">
                    Category : {firstLetter(data.category)}
                  </p>
                  <p className="mr-3">
                    Price :{' '}
                    {data.price === 0 ? 'Free' : firstLetter(data.price)}
                  </p>
                </div>
              </div>
              <div>
                {data.score ? (
                  <div className="flex flex--column flex--align-center">
                    <p>Your Score</p>
                    <h1>{data.score}</h1>
                  </div>
                ) : (
                  <button
                    className="register-btn background--green"
                    type="button"
                  >
                    Register
                  </button>
                )}
              </div>
            </header>
          </div>
          <section style={{ padding: '0px 80px 37px 80px', minHeight: '35vh' }}>
            <div className="tab-wrapper">
              {tabName.map((tab, index) => (
                <button
                  onClick={() => setTabIndex(index)}
                  className={tabIndex === index ? 'tab-btn-active' : 'tab-btn'}
                  key={index}
                >
                  {tab}
                </button>
              ))}
            </div>
            <>
              {tabIndex === 0 ? (
                <Detail />
              ) : tabIndex === 1 ? (
                <Progress />
              ) : (
                <Discussion />
              )}
            </>
          </section>
        </section>
      </section>
    </DashboardLayout>
  );
};

export default index;
