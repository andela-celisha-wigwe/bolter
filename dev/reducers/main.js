import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

function videos(state =[], action) {
	switch (action.type) {
		case 'INCREMENT_LIKES' :
			return state;
		default :
			return state;
	}
	return state;
}

function like(state =[], action) {
	switch (action.type) {
		case 'LIKE_VIDEO' :
			return state;
		default :
			return state;
	}
	return state;
}

function show(state =[], action) {
	switch (action.type) {
		case 'SHOW_DETAILS' :
			return {
			}
		default :
			return state;
	}
	return state;
}

const mainReducer = combineReducers({videos, like, routing: routerReducer  })

export default mainReducer