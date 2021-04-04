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
        fourthHeader: 'Progress',
        fifthHeader: 'Status',
        sixthHeader: 'Score',
      },
    ],
    myClass: [
      {
        id: 1,
        classname: 'Know more javascript',
        category: 'Software',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        progress: '80',
        status: 'Ongoing',
        score: '76',
      },
      {
        id: 2,
        classname: 'Know more javascript',
        category: 'Software',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        progress: '80',
        status: 'Ongoing',
        score: '76',
      },
    ],
    headerAllClass: [
      {
        id: 1,
        firstHeader: 'Class Name',
        secondHeader: 'Category',
        thirdHeader: 'Description',
        fourthHeader: 'Level',
        fifthHeader: 'Pricing',
      },
    ],
    allClass: [
      {
        id: 1,
        classname: 'Know more javascript',
        category: 'Software',
        description:
          'Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak dikenal mengambil sebuah kumpulan teks dan mengacaknya untuk menjadi sebuah buku contoh huruf. Ia tidak hanya bertahan selama 5 abad, tapi juga telah beralih ke penataan huruf elektronik, tanpa ada perubahan apapun. Ia mulai dipopulerkan pada tahun 1960 dengan diluncurkannya lembaran-lembaran Letraset yang menggunakan kalimat-kalimat dari Lorem Ipsum, dan seiring munculnya perangkat lunak Desktop Publishing seperti Aldus PageMaker juga memiliki versi Lorem Ipsum.',
        level: 'Beginner',
        pricing: 'Free',
      },
      {
        id: 2,
        classname: 'Know more javascript',
        category: 'Software',
        description: 'Javascript from the basic for...',
        level: 'Beginner',
        pricing: 'Free',
      },
      {
        id: 3,
        classname: 'Know more javascript',
        category: 'Software',
        description: 'Javascript from the basic for...',
        level: 'Beginner',
        pricing: 'Free',
      },
      {
        id: 4,
        classname: 'Know more javascript',
        category: 'Software',
        description: 'Javascript from the basic for...',
        level: 'Beginner',
        pricing: 'Free',
      },
      {
        id: 5,
        classname: 'Know more javascript',
        category: 'Software',
        description: 'Javascript from the basic for...',
        level: 'Beginner',
        pricing: 'Free',
      },
      {
        id: 6,
        classname: 'Know more javascript',
        category: 'Software',
        description: 'Javascript from the basic for...',
        level: 'Beginner',
        pricing: 'Free',
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

  const renderTableDataMyClass = () => data.myClass.map((subClass) => {
    const {
      id,
      classname,
      category,
      description,
      progress,
      status,
      score,
    } = subClass;
    return (
      <tr className="td-myclass background--white" key={id}>
        <td className="first-data pl-4">
          <input type="checkbox" />
        </td>
        <td>{classname}</td>
        <td>{category}</td>
        <td>{textTruncate(description, 28)}</td>
        <td>
          {progress}
          %
        </td>
        <td>{status}</td>
        <td>{score}</td>
        <td className="last-data pr-4">:</td>
      </tr>
    );
  });

  const renderTableHeaderClass = () => data.headerAllClass.map((subHeader) => {
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

  const renderTableDataClass = () => data.allClass.map((subClass) => {
    const {
      id, classname, category, description, level, pricing,
    } = subClass;
    return (
      <tr className="tr-data" key={id}>
        <td className="first-data pl-2">{classname}</td>
        <td>{category}</td>
        <td>{textTruncate(description, 28)}</td>
        <td>{level}</td>
        <td>{pricing}</td>
        <td>
          <button type="button" className="register-button">Register</button>
        </td>
        <td className="last-data pl-2">:</td>
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
        <section className="new-class background--white width--100">
          <div className="pl-4 pt-4 mb-3">
            <h4>New Class</h4>
          </div>
          <div className="width--100">
            <table className="width--95" style={{ margin: '0 auto' }}>
              <thead>
                {renderTableHeaderClass()}
              </thead>
              <tbody>
                {renderTableDataClass()}
              </tbody>
            </table>
          </div>
          <br />
        </section>
      </section>
    </DashboardLayout>
  );
};

export default index;
