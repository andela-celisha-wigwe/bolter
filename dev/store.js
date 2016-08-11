import { createStore } from 'redux';
import videos from './data/fetcher';
import mainReducer from './reducers/main';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

const defaultState = {
	videos
}

const store = createStore(mainReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

// console.log(store)

export default store;