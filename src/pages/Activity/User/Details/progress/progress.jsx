import React from 'react';

const progress = () => {
  const data = [
    {
      subCourse: 'HTML Essential Training',
      time: 'Friday, 6 November 2020 08.00 - 09.40',
      subScore: 89,
    },
    {
      subCourse: 'CSS Essential Training',
      time: 'Friday, 6 November 2020 08.00 - 09.40',
      subScore: null,
    },
    {
      subCourse: 'Javascript Essential Training',
      time: 'Friday, 6 November 2020 08.00 - 09.40',
      subScore: 78,
    },
  ];

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
    <>
      <section>
        <div className="container">
          {data.map((item, index) => (
            <div className="col-wrapper flex" key={index}>
              <div className="flex" style={{ flex: 1 }}>
                <input
                  type="checkbox"
                  style={{ width: '20px', height: '20px' }}
                />
              </div>
              <div className="flex" style={{ flex: 3 }}>
                <p className="mb-0">{item.subCourse}</p>
              </div>
              <div className="flex" style={{ flex: 3 }}>
                {item.subScore ? (
                  <p className="mb-0 italic-font">
                    You have completed this topic
                  </p>
                ) : (
                  <p className="mb-0">{item.time}</p>
                )}
              </div>
              <div className="flex flex--justify-center b" style={{ flex: 1 }}>
                {item.subScore ? (
                  <h2
                    className="mb-0"
                    style={{ color: `${setColor(item.subScore)}` }}
                  >
                    {item.subScore}
                  </h2>
                ) : (
                  <div className="unfinished">
                    <p className="mb-0 text--dark-red">Unfinished</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default progress;
