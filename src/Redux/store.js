import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const logger = createLogger();
const enhancers = applyMiddleware(thunk, logger);
const reducers = combineReducers();
const reduxStore = createStore(reducers, enhancers);

export default reduxStore;
