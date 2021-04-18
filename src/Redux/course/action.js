import axios from 'axios';

const changeAllCourseData = (data) => {
  return {
    type: 'SET_ALL_COURSE_DATA',
    payload: data,
  };
};

const changeUserCourseData = (data) => {
  return {
    type: 'SET_USER_COURSE_DATA',
    payload: data,
  };
};

export const getAllCourse = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .get('http://localhost:8000/course/')
        .then((res) => {
          // console.log({ res });
          dispatch(changeAllCourseData(res.data.info.result));
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};

export const getUserCourse = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .get('http://localhost:8000/course/36/userCourse/')
        .then((res) => {
          console.log({ res });
          dispatch(changeUserCourseData(res.data.info.result));
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};
