import {createStore , applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares =[logger];
const store = createStore(rootReducer , applyMiddleware(...middlewares)); // applyMiddleware(logger) if we use only one middleware

export default store ;