import React, { useState } from 'react';
import DashboardLayout from '@/layouts/Dashboard/index';

// import './style.scss';

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
      <section>
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
      </section>
    </DashboardLayout>
  );
};

export default index;
