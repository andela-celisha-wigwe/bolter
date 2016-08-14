import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

function videos(state = [], action) {
	switch (action.type) {
		case 'GET_VIDEOS_PENDING' :
			return {
				loading: true,
				status: "pending",
				data: []
			}
		case 'GET_VIDEOS_DONE' :
			return {
				loading: false,
				status: 'found',
				data: action.data
			}
		case 'SEARCHING' :
			return {
				loading: true,
				status: "searching",
				data: []
			}
		case 'SEARCH_VIDEOS_DONE' : 
			return {
				loading: false,
				status: 'found',
				data: action.data
			}
		case 'GET_VIDEOS_FAILED' :
			return [
				...state,
				{videos: state}
			]
		default :
			return state
	}
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