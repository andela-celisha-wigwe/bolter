import Redux from 'redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import videos from './data/fetcher';
import mainReducer from './reducers/main';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

const defaultState = {
	videos: {}
}

const store = createStore(
		mainReducer,
		defaultState,
		applyMiddleware(thunk)
	);
// console.log(store.getState())
// console.log(store.dispatch({
// 	type: 'GET_VIDEOS_DONE',
// 	data: [1,2,3,4,5,4,3,5]
// }))
// console.log(store.getState())

export const history = syncHistoryWithStore(browserHistory, store);

export default store;