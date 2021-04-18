import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import courseReducer from '@/Redux/course/reducers';

const logger = createLogger();
const enhancers = applyMiddleware(thunk, logger);
const reducers = combineReducers({
  courseReducer,
});
const reduxStore = createStore(reducers, enhancers);

export default reduxStore;
