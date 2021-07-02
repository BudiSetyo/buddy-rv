/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import DashboardLayout from '@/layouts/Dashboard/index';
// import Button from '@/components/button/index';

// import Axios from 'axios';

import './style.scss';
import { getAllCourse, getUserCourse } from '@/Redux/course/action';
import { connect } from 'react-redux';

const index = ({ courseReducer, getAllCourse, getUserCourse }) => {
  const [headerMyClass] = useState([
    {
      id: 1,
      firstHeader: 'Class Name',
      secondHeader: 'Category',
      thirdHeader: 'Description',
      fourthHeader: 'Progress',
      fifthHeader: 'Status',
      sixthHeader: 'Score',
    },
  ]);

  const [headerClass] = useState([
    {
      id: 1,
      firstHeader: 'Class Name',
      secondHeader: 'Category',
      thirdHeader: 'Description',
      fourthHeader: 'Level',
      fifthHeader: 'Pricing',
    },
  ]);

  const [data, setData] = useState([]);

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

  const getData = () => {
    // Axios.get('http://localhost:8000/class/').then((res) => {
    //   setData(res.data.result);
    //   // eslint-disable-next-line no-console
    //   console.log(data);
    // }).catch((err) => {
    //   // eslint-disable-next-line no-console
    //   console.log(err);
    // });
    getAllCourse()
    getUserCourse()
    console.log(courseReducer)
  };

  useEffect(() => {
    getData();
  }, []);

  const renderTableHeaderMyClass = () => headerMyClass.map((subHeader) => {
    const {
      id,
      firstHeader,
      secondHeader,
      thirdHeader,
      fourthHeader,
      fifthHeader,
      sixthHeader,
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
        <th>{sixthHeader}</th>
        <tr className="last-head pr-4" />
      </tr>
    );
  });

  const renderTableHeaderClass = () => headerClass.map((subHeader) => {
    const {
      id,
      firstHeader,
      secondHeader,
      thirdHeader,
      fourthHeader,
      fifthHeader,
    } = subHeader;
    return (
      <tr className="tr-header" key={id}>
        <th className="first-header pl-2">{firstHeader}</th>
        <th>{secondHeader}</th>
        <th>{thirdHeader}</th>
        <th>{fourthHeader}</th>
        <th>{fifthHeader}</th>
        <th>
          { }
        </th>
        <th className="last-header pr-2">
          { }
        </th>
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
            <div className="myclass-wrapper width--100">
              <table className="table-my-class width--100" style={{ margin: '0 auto' }}>
                <thead>
                  {renderTableHeaderMyClass()}
                </thead>
                <tbody>
                  {courseReducer.userCourse.map((subCourse) => {
                    const { id, className, category, description } = subCourse;
                    return (
                      <tr className="td-myclass background--white" key={id}>
                        <td className="pl-4"><input type="checkbox" /></td>
                        <td>{className}</td>
                        <td>{category}</td>
                        <td>{textTruncate(description, 28)}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    )
                  })}
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
        <section className="new-class mb-3 p-4 background--white width--100">
          <div className=" mb-3">
            <h4>New Class</h4>
          </div>
          <div className="search-class width--100">
            <input
              type="text"
              className="search-input width--80 p-2"
              placeholder="Quick Search"
            />
            <button className="search-button width--20 p-2 text--white background--blue">search</button>
          </div>
          <div className="sorting-option">
            <select name="category" id="category">
              <option value="">Category</option>
            </select>
            <select name="level" id="level">
              <option value="">Level</option>
            </select>
            <select name="pricing" id="pricing">
              <option value="">Pricing</option>
            </select>
          </div>
          <div className="table-wrapper width--100">
            <table className="width--95" style={{ margin: '0 auto' }}>
              <thead>
                {renderTableHeaderClass()}
              </thead>
              <tbody>
                {courseReducer.allCourse.map((subCourse) => {
                  const {
                    id, className, category, description, level, pricing,
                  } = subCourse;
                  return (
                    <tr className="tr-data" key={id}>
                      <td className="first-data pl-2">{className}</td>
                      <td>{category}</td>
                      <td>{textTruncate(description, 28)}</td>
                      <td>{level}</td>
                      <td>
                        {pricing === 0 ? 'Free' : `$${pricing}`}
                      </td>
                      <td>
                        <button type="button" className="register-btn pt-1 pb-1 pl-3 pr-3 background--green text--white">Register</button>
                      </td>
                      <td className="last-data pl-2">:</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <br />
        </section>
      </section>
    </DashboardLayout>
  );
};

const mapStateToProps = (state) => {
  const { courseReducer } = state
  return {
    courseReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllCourse: () => {
      dispatch(
        getAllCourse()
      )
    },
    getUserCourse: () => {
      dispatch(
        getUserCourse()
      )
    }
  }
}

const connectedIndex = connect(mapStateToProps, mapDispatchToProps)(index)

export default connectedIndex;
