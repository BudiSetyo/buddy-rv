import axios from 'axios';

export const login = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .post('http://localhost:8000/', {
          username: username,
          password: password,
        })
        .then((res) => {})
        .catch((err) => {});
    });
  };
};
