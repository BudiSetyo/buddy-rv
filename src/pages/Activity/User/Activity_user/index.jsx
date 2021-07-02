/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import DashboardLayout from '@/layouts/Dashboard/index';
// import Button from '@/components/button/index';
import { IoEllipsisVertical } from 'react-icons/io5';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// import Axios from 'axios';

import './style.scss';

const index = () => {
  const dataMyClass = [
    {
      course: 'Front-end fundamentals',
      category: 'Software',
      description: 'Learn the fundamentals of front end...',
      progress: 78,
      status: true,
      score: 89,
    },
    {
      course: 'Front-end fundamentals',
      category: 'Software',
      description: 'Learn the fundamentals of front end...',
      progress: 67,
      status: false,
      score: 67,
    },
  ];

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

  const setColor = (score) => {
    if (score) {
      if (Number(score) > 90) {
        return '#2BE6AE';
      } else if (Number(score) > 70) {
        return '#51E72B';
      } else if (Number(score) > 50) {
        return '#CCE72B';
      } else if (Number(score) > 30) {
        return '#E7852B';
      } else {
        return '#E6422B';
      }
    }
  };

  return (
    <DashboardLayout>
      <section>
        <h3 className="mb-5">Activity</h3>
        <section>
          <div className="flex flex--align-center pl-4 pr-4 mb-3 ">
            <div style={{ display: 'flex', flex: 1 }}>
              <input
                style={{ width: '20px', height: '20px' }}
                type="checkbox"
              />
            </div>
            <div style={{ display: 'flex', flex: 3 }}>
              <h4 className="mb-0">Class Name</h4>
            </div>
            <div
              className="flex--justify-center"
              style={{ display: 'flex', flex: 2.5 }}
            >
              <h4 className="mb-0">Category</h4>
            </div>
            <div style={{ display: 'flex', flex: 5 }}>
              <h4 className="mb-0">Description</h4>
            </div>
            <div
              className="flex--justify-center"
              style={{ display: 'flex', flex: 2 }}
            >
              <h4 className="mb-0">Progress</h4>
            </div>
            <div
              className="flex--justify-center"
              style={{ display: 'flex', flex: 2 }}
            >
              <h4 className="mb-0">Status</h4>
            </div>
            <div
              className="flex--justify-center"
              style={{ display: 'flex', flex: 2 }}
            >
              <h4 className="mb-0">Score</h4>
            </div>
            <div style={{ display: 'flex', flex: 1 }}></div>
          </div>

          <div>
            {dataMyClass.map((item, index) => (
              <div
                className="table-data-user flex flex--align-center background--white p-4 mb-1"
                key={index}
              >
                <div style={{ display: 'flex', flex: 1 }}>
                  <input
                    style={{ width: '20px', height: '20px' }}
                    type="checkbox"
                  />
                </div>
                <div style={{ display: 'flex', flex: 3 }}>
                  <p className="mb-0">{textTruncate(item.course, 25)}</p>
                </div>
                <div
                  className="flex--justify-center"
                  style={{ display: 'flex', flex: 2.5 }}
                >
                  <p className="mb-0">{item.category}</p>
                </div>
                <div style={{ display: 'flex', flex: 5 }}>
                  <p className="mb-0">{item.description}</p>
                </div>
                <div
                  className="flex--justify-center"
                  style={{ display: 'flex', flex: 2 }}
                >
                  <div style={{ width: '50%', height: '50%' }}>
                    <CircularProgressbar
                      value={item.progress}
                      text={`${item.progress}%`}
                      styles={buildStyles({
                        textSize: '25px',
                      })}
                    />
                  </div>
                </div>
                <div
                  className=" flex--justify-center"
                  style={{ display: 'flex', flex: 2 }}
                >
                  <div
                    className="background--light-blue p-1 pl-2 pr-2 "
                    style={{ borderRadius: '15px' }}
                  >
                    <p className="text--blue mb-0">
                      {!item.status ? 'Ongoing' : 'Completed'}
                    </p>
                  </div>
                </div>
                <div
                  className="flex--justify-center"
                  style={{ display: 'flex', flex: 2 }}
                >
                  <h2 className="mb-0" style={{ color: setColor(item.score) }}>
                    {item.score}
                  </h2>
                </div>
                <div
                  className="flex--justify-end"
                  style={{ display: 'flex', flex: 1, fontSize: '25px' }}
                >
                  <i className="mb-0 text--grey">
                    <IoEllipsisVertical />
                  </i>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </DashboardLayout>
  );
};

export default index;
