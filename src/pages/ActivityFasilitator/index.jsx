import React, { useState } from 'react';
import DashboardLayout from '@/layouts/Dashboard/index';

import './style.scss';

const index = () => {
  const [data] = useState({
    headerMyClass: [
      {
        id: 1,
        firstHeader: 'Class Name',
        secondHeader: 'Category',
        thirdHeader: 'Description',
        fourthHeader: 'Schedule',
        fifthHeader: 'Students',
      },
    ],
    myClass: [
      {
        id: 1,
        classname: 'Know more javascript',
        category: 'Software',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        schedule: 'Friday, 08:00 - 09:40',
        students: '24',
      },
      {
        id: 2,
        classname: 'Know more javascript',
        category: 'Software',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        schedule: 'Friday, 08:00 - 09:40',
        students: '24',
      },
    ],
  });

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

  const renderTableHeaderMyClass = () => data.headerMyClass.map((subHeader) => {
    const {
      id,
      firstHeader,
      secondHeader,
      thirdHeader,
      fourthHeader,
      fifthHeader,
    } = subHeader;
    return (
      <tr className="th-myclass width--100" key={id}>
        <th className="first-head pl-4">
          <input type="checkbox" />
        </th>
        <th>{firstHeader}</th>
        <th>{secondHeader}</th>
        <th>{thirdHeader}</th>
        <th>{fourthHeader}</th>
        <th>{fifthHeader}</th>
        <tr className="last-head pr-4" />
      </tr>
    );
  });

  const renderTableDataMyClass = () => data.myClass.map((subClass) => {
    const {
      id,
      classname,
      category,
      description,
      schedule,
      students,
    } = subClass;
    return (
      <tr className="td-myclass background--white" key={id}>
        <td className="first-data pl-4">
          <input type="checkbox" />
        </td>
        <td>{classname}</td>
        <td>{category}</td>
        <td>{textTruncate(description, 28)}</td>
        <td>{schedule}</td>
        <td>{students}</td>
        <td className="last-data pr-4">:</td>
      </tr>
    );
  });

  return (
    <DashboardLayout>
      <section className="width--100">
        <h3 className="mb-5">Activity</h3>
        <section>
          <div className="pl-4 mb-3">
            <h4>My Class</h4>
          </div>
          <div>
            <div className="width--100">
              <table className="table-my-class width--100" style={{ margin: '0 auto' }}>
                <thead>
                  {renderTableHeaderMyClass()}
                </thead>
                <tbody>
                  {renderTableDataMyClass()}
                </tbody>
              </table>
              <div className="view-all text--center mt-3 mb-5">
                <button type="button">
                  view all
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-3">
          <h4 className="mb-3 pl-4">Create New Class</h4>
          <section className="new-course background--white width--100 p-4">
            <form action="submit">
              <div className="flex">
                <div className="width--100">
                  <label htmlFor="input-course">
                    <span className="course-label">Class name</span> :
                    {' '}
                    <input className="course-name-input ml-2" type="text" />
                  </label>
                </div>
                <div className="width--100">
                  <label htmlFor="input-course">
                    <span className="course-label">Pricing</span> :
                    {' '}
                    <input className="ml-2 mr-1" type="radio" />
                    Free
                    <input className="ml-4 mr-1" type="radio" />
                    Paid
                </label>
                </div>
              </div>
              <div className="flex">
                <div className="width--100">
                  <label htmlFor="input-course">
                    <span className="course-label">Categories</span> :
                    {' '}
                    <select className="ml-2" name="categories" id="categories">
                      <option value="software">Software</option>
                    </select>
                  </label>
                </div>
                <div className="width--100">
                  <label htmlFor="input-course">
                    <span className="course-label">Schedule</span> :
                    {' '}
                    <select className="ml-2 mr-3" name="day" id="day">
                      <option value="monday">Monday</option>
                    </select>
                    <input className="course-time-input" type="time" />
                    <input className="course-time-input" type="time" />
                  </label>
                </div>
              </div>
              <div className="flex flex--column">
                <label htmlFor="description">
                  <span className="course-label">Description</span> :
                </label>
                <textarea className="course-description p-3 mt-2 background--light-blue" name="description" id="desc" cols="30" rows="10"></textarea>
              </div>
              <div className="flex flex--justify-end">
                <button className="new-course-btn background--green mt-3 p-2 width--20 text--white" type="submit">Create</button>
              </div>
            </form>
          </section>
        </section>
      </section>
    </DashboardLayout>
  );
};

export default index;
