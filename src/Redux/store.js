import {createStore , applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares =[logger];
export const store = createStore(rootReducer , applyMiddleware(...middlewares)); // applyMiddleware(logger) if we use only one middleware
export const persistor = persistStore(store);