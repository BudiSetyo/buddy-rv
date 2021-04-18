const initialState = () => ({
  allCourse: [],
});

export default (state = initialState(), { type, payload }) => {
  switch (type) {
    case 'GET_ALL_COURSE':
      return {
        ...state,
        results: payload,
      };
  }
  return state;
};
