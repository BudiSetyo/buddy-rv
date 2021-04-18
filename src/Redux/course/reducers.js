const initialState = () => ({
  allCourse: [],
  userCourse: [],
});

export default (state = initialState(), { type, payload }) => {
  switch (type) {
    case 'SET_ALL_COURSE_DATA':
      return {
        ...state,
        allCourse: payload,
      };
    case 'SET_USER_COURSE_DATA':
      return {
        ...state,
        userCourse: payload,
      };
  }
  return state;
};
