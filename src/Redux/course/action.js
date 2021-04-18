import axios from 'axios';

export const getAllCourse = () => {
  let data = [];
  axios.get('http://localhost:8000/course').then((res) => {
    // console.log(res);
    // console.log(res.data.info.result);
    data = res.data.info.result;
    console.log(data);
  });

  console.log(data);

  return {
    type: 'GET_ALL_COURSE',
    payload: data,
  };
};
