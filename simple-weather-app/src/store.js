import {createStore, applyMiddleware} from 'redux';
import reduxPromise from 'redux-promise';
import reducers from './reducers';

const storeWithMidlleware = applyMiddleware(reduxPromise)(createStore);

export default storeWithMidlleware(reducers);