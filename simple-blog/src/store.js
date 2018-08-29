import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import { applyMiddleware, createStore } from 'redux';

const storeWithMiddlewares = applyMiddleware(reduxThunk, reduxPromise)(createStore);

export default storeWithMiddlewares(reducers);