import Redux from 'redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import mainReducer from './reducers/main';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

const defaultState = {
	videos: []
}

const store = createStore(mainReducer,defaultState,applyMiddleware(thunk));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;