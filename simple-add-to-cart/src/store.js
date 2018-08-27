import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const storeWithMiddleware = applyMiddleware(thunk)(createStore);

export default storeWithMiddleware(reducers);

